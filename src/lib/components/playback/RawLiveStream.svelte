<svelte:options immutable />

<script lang="ts">
	import { camerasApi } from '$lib/streams';
	import RawStream from './RawStream.svelte';

	export let cameraId: string;
	export let muted = true;

	$: getCodecs = () => camerasApi.camerasCameraIdLiveCodecsGet({ cameraId });
	$: postSdp = (sdp: string) =>
		camerasApi
			.camerasCameraIdLiveSdpPost({ cameraId, offer: { offer_base64: btoa(sdp) } })
			.then((answer) => answer.answer_base64 as string);
</script>

<RawStream {postSdp} {getCodecs} {muted} />
