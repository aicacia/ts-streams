import { camerasApi } from '$lib/streams';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const cameraId = event.params.cameraId;
	const camera = await camerasApi.camerasCameraIdGet({ cameraId });

	return {
		camera
	};
};
