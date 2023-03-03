<svelte:options immutable />

<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import Stream from '$lib/components/Stream.svelte';
	import type { ModelsCameraST } from '$lib/openapi/streams';
	import { camerasApi } from '$lib/streams';
	import { onMount } from 'svelte';

	let cameras: ModelsCameraST[] = [];

	onMount(async () => {
		cameras = await camerasApi.camerasGet();
	});
</script>

<Layout>
	<div class="flex flex-row">
		{#each cameras as camera (camera.id)}
			<div class="flex flex-grow">
				<Stream cameraId={camera.id} />
			</div>
		{/each}
	</div>
</Layout>
