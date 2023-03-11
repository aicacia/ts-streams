<svelte:options immutable />

<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import Playback from '$lib/components/playback/Playback.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Layout>
	<div>
		<h1>{data.camera.name}</h1>
		<h4>ID: {data.camera.id}</h4>
	</div>
	<Playback cameraIds={[data.camera.id]} />
</Layout>
