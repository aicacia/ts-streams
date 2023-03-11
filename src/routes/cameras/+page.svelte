<svelte:options immutable />

<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Layout>
	<table class="table-auto w-full">
		<thead>
			<tr>
				<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
					>Name
				</th>
				<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
					>Url
				</th>
				<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
					>Created At
				</th>
				<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1" />
			</tr>
		</thead>
		<tbody>
			{#each data.cameras as camera (camera.id)}
				<tr class="hover:bg-gray-200 cursor-pointer">
					<td class="border-b border-slate-100 dark:border-slate-700 p-1">
						<a href="/cameras/{camera.id}">{camera.name}</a>
					</td>
					<td class="border-b border-slate-100 dark:border-slate-700 p-1">
						<a href={camera.url} target="_blank">{camera.url}</a>
					</td>
					<td class="border-b border-slate-100 dark:border-slate-700 p-1"
						>{camera.created_ts.toLocaleString()}</td
					>
					<td class="border-b border-slate-100 dark:border-slate-700 p-1" />
				</tr>
			{/each}
		</tbody>
	</table>
</Layout>
