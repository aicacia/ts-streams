<svelte:options immutable />

<script lang="ts">
	import Notifications from './Notifications.svelte';
</script>

<div class="relative flex w-full h-full">
	<div class="flex flex-col w-full h-full">
		<div class="flex flex-col w-full h-full overflow-hidden">
			<slot />
		</div>
	</div>
</div>

<Notifications />
