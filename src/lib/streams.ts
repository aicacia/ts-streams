import { Configuration, CamerasApi } from './openapi/streams';

export const defaultConfiguration = {
	basePath: import.meta.env.VITE_STREAMS_API_URL
};
export const configuration = new Configuration(defaultConfiguration);

export const camerasApi = new CamerasApi(configuration);
