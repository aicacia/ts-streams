<svelte:options immutable />

<script lang="ts">
	import { camerasApi } from '$lib/streams';
	import RawPlaybackStream from './RawPlaybackStream.svelte';

	export let cameraIds: string[] = [];
	export let start: Date = new Date('2023-03-11T12:44:00.000Z');

	let playbackIds: string[] = [];
	$: Promise.all(
		cameraIds.map((cameraId) =>
			camerasApi.camerasCameraIdPlaybackPost({ cameraId, start: start.getTime().toString() })
		)
	).then((results) => {
		playbackIds = results.map((playbackId) => JSON.parse(playbackId));
	});
</script>

<div>
	{#each playbackIds as playbackId (playbackId)}
		<RawPlaybackStream {playbackId} />
	{/each}
</div>
