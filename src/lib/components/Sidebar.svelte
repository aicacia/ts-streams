<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import MdPhotoCamera from 'svelte-icons/md/MdPhotoCamera.svelte';
	import MdVideocam from 'svelte-icons/md/MdVideocam.svelte';
</script>

<div class="flex h-full shadow">
	<ul>
		<li class="p-2 btn secondary" class:active={$page.url.pathname === `${base}/`}>
			<a href={`${base}/`}
				><div class="w-10 h-10"><MdVideocam /></div>
				<span class="absolute text-white top-[16px] left-[16px] text-[8px]">LIVE</span></a
			>
		</li>
		<li class="p-2 btn secondary" class:active={$page.url.pathname.includes(`${base}/cameras`)}>
			<a href={`${base}/cameras`}><div class="w-10 h-10"><MdPhotoCamera /></div></a>
		</li>
	</ul>
</div>
