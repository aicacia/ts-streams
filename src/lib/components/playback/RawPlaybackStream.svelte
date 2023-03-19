<svelte:options immutable />

<script lang="ts">
	import { playbackApi } from '$lib/streams';
	import RawStream from './RawStream.svelte';

	export let playbackId: string;
	export let muted: boolean;

	$: getCodecs = () => playbackApi.playbackPlaybackIdCodecsGet({ playbackId });
	$: postSdp = (sdp: string) =>
		playbackApi
			.playbackPlaybackIdSdpPost({ playbackId, offer: { offer_base64: btoa(sdp) } })
			.then((answer) => answer.answer_base64 as string);
</script>

<RawStream {postSdp} {getCodecs} {muted} />
