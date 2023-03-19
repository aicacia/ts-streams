<svelte:options immutable />

<script lang="ts">
	import { browser } from '$app/environment';
	import { createStream, type WebRTCStream } from '$lib/webrtc';
	import { onDestroy } from 'svelte';

	export let getCodecs: () => Promise<string[]>;
	export let postSdp: (sdp: string) => Promise<string>;
	export let element: HTMLVideoElement | undefined = undefined;
	export let stream: WebRTCStream | undefined = undefined;
	export let iceServers: string[] = [];
	export let muted = true;

	$: if (browser && element) {
		if (stream) {
			stream.close();
		}
		stream = createStream(element, iceServers, postSdp, getCodecs, muted);
	}

	onDestroy(() => {
		if (stream) {
			stream.close();
		}
	});
</script>

<video class="w-full h-full" bind:this={element} on:play|preventDefault on:pause|preventDefault
	><track kind="captions" /></video
>
