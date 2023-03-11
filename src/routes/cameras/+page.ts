import { camerasApi } from '$lib/streams';
import type { PageLoad } from './$types';

export const load: PageLoad = async (_event) => {
	const cameras = await camerasApi.camerasGet();

	return {
		cameras
	};
};
