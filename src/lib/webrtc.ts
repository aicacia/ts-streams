import { waitMS } from '$lib/util';
import { EventEmitter } from 'eventemitter3';

const RETRY_TIMEOUT_MS = 10_000;

export type WebRTCStream = ReturnType<typeof createStream>;

export function createStream(
	videoElement: HTMLVideoElement,
	iceServers: string[],
	getSdp: (offer: string) => Promise<string>,
	getCodecs: () => Promise<string[]>,
	muted = true
) {
	const emitter = new EventEmitter<{
		stop(): void;
		close(): void;
		ready(): void;
		start(): void;
		error(error: Error): void;
	}>();
	let pc: RTCPeerConnection | null = null;
	let mediaStream: MediaStream | null = null;
	let ready = false;
	let closed = false;

	function close() {
		closed = true;
		stop(true);
		emitter.emit('close');
	}

	function stop(emit = true) {
		if (mediaStream) {
			for (const track of mediaStream.getTracks()) {
				mediaStream.removeTrack(track);
			}
			videoElement.srcObject = null;
		}
		if (pc) {
			pc.close();
		}
		mediaStream = null;
		pc = null;
		ready = false;
		if (emit) {
			emitter.emit('stop');
		}
	}

	async function onFailRetry(wait = RETRY_TIMEOUT_MS) {
		stop(false);
		await waitMS(wait);
		await initConnection();
	}

	async function initConnection() {
		if (closed) {
			return;
		}
		stop(false);
		pc = new RTCPeerConnection(
			iceServers.length
				? {
						iceServers: [
							{
								urls: iceServers
							}
						]
				  }
				: undefined
		);
		mediaStream = new MediaStream();
		videoElement.playsInline = true;
		videoElement.autoplay = true;
		videoElement.muted = muted;
		videoElement.srcObject = mediaStream;
		pc.addEventListener('negotiationneeded', async function () {
			const offer = await this.createOffer();
			await this.setLocalDescription(offer);
			const data = await getSdp(this.localDescription?.sdp as string);
			await this.setRemoteDescription(
				new RTCSessionDescription({
					type: 'answer',
					sdp: atob(data)
				})
			);
		});
		pc.addEventListener('track', async function (event) {
			if (mediaStream) {
				for (const stream of event.streams) {
					for (const track of stream.getTracks()) {
						mediaStream.addTrack(track);
					}
				}
			}
		});
		pc.addEventListener('iceconnectionstatechange', async function () {
			if (!closed) {
				if (['disconnected', 'failed', 'closed'].includes(this.iceConnectionState)) {
					onFailRetry(0);
				} else if (this.iceConnectionState === 'connected') {
					if (!ready) {
						ready = true;
						emitter.emit('ready');
					}
				}
			}
		});
		try {
			const codecs = await getCodecs();
			for (const codec of codecs) {
				pc.addTransceiver(codec, {
					direction: 'sendrecv'
				});
			}
			emitter.emit('start');
		} catch (error) {
			stop(true);
			emitter.emit('error', error as Error);
			onFailRetry();
		}
	}

	initConnection();

	return { emitter, close };
}
