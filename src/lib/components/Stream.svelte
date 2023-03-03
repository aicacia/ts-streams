<svelte:options immutable />

<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import { camerasApi } from '$lib/streams';
	import { waitMS } from '$lib/util';
	import { EventEmitter } from 'eventemitter3';

	const RETRY_TIMEOUT_MS = 10000;

	export type Stream = ReturnType<typeof initStream>;

	function initStream(
		videoElement: HTMLVideoElement,
		iceServers: string[],
		getSdp: (offer: string) => Promise<string>,
		getCodecs: () => Promise<string[]>
	) {
		let emitter = new EventEmitter<{
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

		function close(emit = true) {
			closed = true;
			stop(emit);
			if (emit) {
				emitter.emit('close');
			}
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
			videoElement.muted = true;
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

		async function start() {
			await initConnection();
		}

		start();

		return {
			emitter,
			start
		};
	}
</script>

<script lang="ts">
	export let cameraId: string;
	export let iceServers: string[] = [];

	let videoElement: HTMLVideoElement;
	let stream: Stream | undefined;

	$: streamGetCodecs = () => camerasApi.camerasCameraIdLiveCodecsGet({ cameraId });
	$: streamPostSdp = (sdp: string) =>
		camerasApi
			.camerasCameraIdLiveSdpPost({ cameraId, offer: { offer_base64: btoa(sdp) } })
			.then((answer) => answer.answer_base64 as string);
	$: if (browser && videoElement && cameraId) {
		stream = initStream(videoElement, iceServers, streamPostSdp, streamGetCodecs);
	}

	function onTimeUpdate() {}
</script>

<video
	class="w-full h-full"
	bind:this={videoElement}
	on:play|preventDefault
	on:pause|preventDefault
	on:timeupdate={onTimeUpdate}><track kind="captions" /></video
>
