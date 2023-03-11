<svelte:options immutable />

<script lang="ts">
	import type { ModelsCameraST } from '$lib/openapi/streams';
	import RawLiveStream from './playback/RawLiveStream.svelte';

	export let cameras: ModelsCameraST[] = [];

	let offsetWidth = 0;
	let offsetHeight = 0;
	let width = 0;
	let height = 0;

	$: {
		const w = offsetWidth;
		const h = offsetHeight;
		if (cameras.length > 2 && w >= 480) {
			const sqrt = Math.round(Math.sqrt(cameras.length));
			let r = w > h ? cameras.length - sqrt : sqrt;
			let c = cameras.length - r;
			width = w / r;
			height = h / c;
		} else {
			width = w > h ? w / cameras.length : w;
			height = h > w ? h / cameras.length : h;
		}
	}
</script>

<div bind:offsetWidth bind:offsetHeight class="w-full h-full">
	{#each cameras as camera (camera.id)}
		<div class="inline-block" style="width:{width}px;height:{height}px;">
			<RawLiveStream cameraId={camera.id} />
		</div>
	{/each}
</div>
