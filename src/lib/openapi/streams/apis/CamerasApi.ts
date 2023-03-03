/* tslint:disable */
/* eslint-disable */
/**
 * Streams
 * Streams API
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: nathanfaucett@email.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ModelsAnswerST,
  ModelsCameraST,
  ModelsOfferBodyST,
  ModelsResponseErrorST,
  ServicesCameraCreateST,
  ServicesCameraUpdateST,
} from '../models';
import {
    ModelsAnswerSTFromJSON,
    ModelsAnswerSTToJSON,
    ModelsCameraSTFromJSON,
    ModelsCameraSTToJSON,
    ModelsOfferBodySTFromJSON,
    ModelsOfferBodySTToJSON,
    ModelsResponseErrorSTFromJSON,
    ModelsResponseErrorSTToJSON,
    ServicesCameraCreateSTFromJSON,
    ServicesCameraCreateSTToJSON,
    ServicesCameraUpdateSTFromJSON,
    ServicesCameraUpdateSTToJSON,
} from '../models';

export interface CamerasCameraIdDeleteRequest {
    cameraId: string;
}

export interface CamerasCameraIdGetRequest {
    cameraId: string;
}

export interface CamerasCameraIdLiveCodecsGetRequest {
    cameraId: string;
}

export interface CamerasCameraIdLiveSdpPostRequest {
    cameraId: string;
    offer: ModelsOfferBodyST;
}

export interface CamerasCameraIdPatchRequest {
    cameraId: string;
    camera: ServicesCameraUpdateST;
}

export interface CamerasCameraIdPlaybackPostRequest {
    cameraId: string;
    start: string;
}

export interface CamerasPostRequest {
    camera: ServicesCameraCreateST;
}

export interface PlaybackPlaybackIdCodecsGetRequest {
    playbackId: string;
}

export interface PlaybackPlaybackIdSdpPostRequest {
    playbackId: string;
    offer: ModelsOfferBodyST;
}

/**
 * CamerasApi - interface
 * 
 * @export
 * @interface CamerasApiInterface
 */
export interface CamerasApiInterface {
    /**
     * delette camera by id
     * @summary Delete Camera
     * @param {string} cameraId Camera ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdDeleteRaw(requestParameters: CamerasCameraIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * delette camera by id
     * Delete Camera
     */
    camerasCameraIdDelete(requestParameters: CamerasCameraIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * get camera by id
     * @summary Get Camera by id
     * @param {string} cameraId Camera ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdGetRaw(requestParameters: CamerasCameraIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>>;

    /**
     * get camera by id
     * Get Camera by id
     */
    camerasCameraIdGet(requestParameters: CamerasCameraIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST>;

    /**
     * get camera live codecs
     * @summary Get Live Codecs
     * @param {string} cameraId Camera ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdLiveCodecsGetRaw(requestParameters: CamerasCameraIdLiveCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * get camera live codecs
     * Get Live Codecs
     */
    camerasCameraIdLiveCodecsGet(requestParameters: CamerasCameraIdLiveCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

    /**
     * send live offer for camera by id
     * @summary Send live offer
     * @param {string} cameraId Camera ID
     * @param {ModelsOfferBodyST} offer Offer body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdLiveSdpPostRaw(requestParameters: CamerasCameraIdLiveSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsAnswerST>>;

    /**
     * send live offer for camera by id
     * Send live offer
     */
    camerasCameraIdLiveSdpPost(requestParameters: CamerasCameraIdLiveSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAnswerST>;

    /**
     * update a camera by id
     * @summary Update Camera
     * @param {string} cameraId Camera ID
     * @param {ServicesCameraUpdateST} camera Update Camera
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdPatchRaw(requestParameters: CamerasCameraIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>>;

    /**
     * update a camera by id
     * Update Camera
     */
    camerasCameraIdPatch(requestParameters: CamerasCameraIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST>;

    /**
     * create a new camera playback
     * @summary Create Playback
     * @param {string} cameraId Camera ID
     * @param {string} start Playback start time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasCameraIdPlaybackPostRaw(requestParameters: CamerasCameraIdPlaybackPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * create a new camera playback
     * Create Playback
     */
    camerasCameraIdPlaybackPost(requestParameters: CamerasCameraIdPlaybackPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * list all cameras
     * @summary Get Cameras
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelsCameraST>>>;

    /**
     * list all cameras
     * Get Cameras
     */
    camerasGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelsCameraST>>;

    /**
     * create a camera
     * @summary Create Camera
     * @param {ServicesCameraCreateST} camera Create Camera
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    camerasPostRaw(requestParameters: CamerasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>>;

    /**
     * create a camera
     * Create Camera
     */
    camerasPost(requestParameters: CamerasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST>;

    /**
     * get camera playback codecs
     * @summary Get Playbaack Codecs
     * @param {string} playbackId Playback ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    playbackPlaybackIdCodecsGetRaw(requestParameters: PlaybackPlaybackIdCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * get camera playback codecs
     * Get Playbaack Codecs
     */
    playbackPlaybackIdCodecsGet(requestParameters: PlaybackPlaybackIdCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

    /**
     * send playback offer for camera by id
     * @summary Send playback offer
     * @param {string} playbackId Playback ID
     * @param {ModelsOfferBodyST} offer Offer body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CamerasApiInterface
     */
    playbackPlaybackIdSdpPostRaw(requestParameters: PlaybackPlaybackIdSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsAnswerST>>;

    /**
     * send playback offer for camera by id
     * Send playback offer
     */
    playbackPlaybackIdSdpPost(requestParameters: PlaybackPlaybackIdSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAnswerST>;

}

/**
 * 
 */
export class CamerasApi extends runtime.BaseAPI implements CamerasApiInterface {

    /**
     * delette camera by id
     * Delete Camera
     */
    async camerasCameraIdDeleteRaw(requestParameters: CamerasCameraIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cameras/{cameraId}`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delette camera by id
     * Delete Camera
     */
    async camerasCameraIdDelete(requestParameters: CamerasCameraIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.camerasCameraIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * get camera by id
     * Get Camera by id
     */
    async camerasCameraIdGetRaw(requestParameters: CamerasCameraIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cameras/{cameraId}`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsCameraSTFromJSON(jsonValue));
    }

    /**
     * get camera by id
     * Get Camera by id
     */
    async camerasCameraIdGet(requestParameters: CamerasCameraIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST> {
        const response = await this.camerasCameraIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get camera live codecs
     * Get Live Codecs
     */
    async camerasCameraIdLiveCodecsGetRaw(requestParameters: CamerasCameraIdLiveCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdLiveCodecsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cameras/{cameraId}/live/codecs`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get camera live codecs
     * Get Live Codecs
     */
    async camerasCameraIdLiveCodecsGet(requestParameters: CamerasCameraIdLiveCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.camerasCameraIdLiveCodecsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * send live offer for camera by id
     * Send live offer
     */
    async camerasCameraIdLiveSdpPostRaw(requestParameters: CamerasCameraIdLiveSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsAnswerST>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdLiveSdpPost.');
        }

        if (requestParameters.offer === null || requestParameters.offer === undefined) {
            throw new runtime.RequiredError('offer','Required parameter requestParameters.offer was null or undefined when calling camerasCameraIdLiveSdpPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cameras/{cameraId}/live/sdp`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelsOfferBodySTToJSON(requestParameters.offer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsAnswerSTFromJSON(jsonValue));
    }

    /**
     * send live offer for camera by id
     * Send live offer
     */
    async camerasCameraIdLiveSdpPost(requestParameters: CamerasCameraIdLiveSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAnswerST> {
        const response = await this.camerasCameraIdLiveSdpPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update a camera by id
     * Update Camera
     */
    async camerasCameraIdPatchRaw(requestParameters: CamerasCameraIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdPatch.');
        }

        if (requestParameters.camera === null || requestParameters.camera === undefined) {
            throw new runtime.RequiredError('camera','Required parameter requestParameters.camera was null or undefined when calling camerasCameraIdPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cameras/{cameraId}`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ServicesCameraUpdateSTToJSON(requestParameters.camera),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsCameraSTFromJSON(jsonValue));
    }

    /**
     * update a camera by id
     * Update Camera
     */
    async camerasCameraIdPatch(requestParameters: CamerasCameraIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST> {
        const response = await this.camerasCameraIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a new camera playback
     * Create Playback
     */
    async camerasCameraIdPlaybackPostRaw(requestParameters: CamerasCameraIdPlaybackPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.cameraId === null || requestParameters.cameraId === undefined) {
            throw new runtime.RequiredError('cameraId','Required parameter requestParameters.cameraId was null or undefined when calling camerasCameraIdPlaybackPost.');
        }

        if (requestParameters.start === null || requestParameters.start === undefined) {
            throw new runtime.RequiredError('start','Required parameter requestParameters.start was null or undefined when calling camerasCameraIdPlaybackPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cameras/{cameraId}/playback`.replace(`{${"cameraId"}}`, encodeURIComponent(String(requestParameters.cameraId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * create a new camera playback
     * Create Playback
     */
    async camerasCameraIdPlaybackPost(requestParameters: CamerasCameraIdPlaybackPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.camerasCameraIdPlaybackPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * list all cameras
     * Get Cameras
     */
    async camerasGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelsCameraST>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cameras`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelsCameraSTFromJSON));
    }

    /**
     * list all cameras
     * Get Cameras
     */
    async camerasGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelsCameraST>> {
        const response = await this.camerasGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * create a camera
     * Create Camera
     */
    async camerasPostRaw(requestParameters: CamerasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsCameraST>> {
        if (requestParameters.camera === null || requestParameters.camera === undefined) {
            throw new runtime.RequiredError('camera','Required parameter requestParameters.camera was null or undefined when calling camerasPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cameras`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServicesCameraCreateSTToJSON(requestParameters.camera),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsCameraSTFromJSON(jsonValue));
    }

    /**
     * create a camera
     * Create Camera
     */
    async camerasPost(requestParameters: CamerasPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsCameraST> {
        const response = await this.camerasPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get camera playback codecs
     * Get Playbaack Codecs
     */
    async playbackPlaybackIdCodecsGetRaw(requestParameters: PlaybackPlaybackIdCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.playbackId === null || requestParameters.playbackId === undefined) {
            throw new runtime.RequiredError('playbackId','Required parameter requestParameters.playbackId was null or undefined when calling playbackPlaybackIdCodecsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/playback/{playbackId}/codecs`.replace(`{${"playbackId"}}`, encodeURIComponent(String(requestParameters.playbackId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get camera playback codecs
     * Get Playbaack Codecs
     */
    async playbackPlaybackIdCodecsGet(requestParameters: PlaybackPlaybackIdCodecsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.playbackPlaybackIdCodecsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * send playback offer for camera by id
     * Send playback offer
     */
    async playbackPlaybackIdSdpPostRaw(requestParameters: PlaybackPlaybackIdSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelsAnswerST>> {
        if (requestParameters.playbackId === null || requestParameters.playbackId === undefined) {
            throw new runtime.RequiredError('playbackId','Required parameter requestParameters.playbackId was null or undefined when calling playbackPlaybackIdSdpPost.');
        }

        if (requestParameters.offer === null || requestParameters.offer === undefined) {
            throw new runtime.RequiredError('offer','Required parameter requestParameters.offer was null or undefined when calling playbackPlaybackIdSdpPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/playback/{playbackId}/sdp`.replace(`{${"playbackId"}}`, encodeURIComponent(String(requestParameters.playbackId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelsOfferBodySTToJSON(requestParameters.offer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsAnswerSTFromJSON(jsonValue));
    }

    /**
     * send playback offer for camera by id
     * Send playback offer
     */
    async playbackPlaybackIdSdpPost(requestParameters: PlaybackPlaybackIdSdpPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAnswerST> {
        const response = await this.playbackPlaybackIdSdpPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
