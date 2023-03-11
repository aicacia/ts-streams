<svelte:options immutable />

<script lang="ts">
	import BaseLayout from '$lib/components/BaseLayout.svelte';
	import Live from '$lib/components/Live.svelte';
	import type { ModelsCameraST } from '$lib/openapi/streams';
	import { camerasApi } from '$lib/streams';
	import { onMount } from 'svelte';

	let cameras: ModelsCameraST[] = [];

	onMount(async () => {
		cameras = await camerasApi.camerasGet();
	});
</script>

<BaseLayout>
	<Live {cameras} />
</BaseLayout>
