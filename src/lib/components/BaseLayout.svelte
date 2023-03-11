<svelte:options immutable />

<script lang="ts">
	import Notifications from './Notifications.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="relative flex w-full h-full">
	<div class="flex flex-col w-full h-full">
		<div class="flex flex-row w-full h-full overflow-hidden">
			<Sidebar />
			<slot />
		</div>
	</div>
</div>

<Notifications />
