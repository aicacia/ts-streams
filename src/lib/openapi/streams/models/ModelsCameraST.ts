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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelsCameraST
 */
export interface ModelsCameraST {
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    created_ts: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelsCameraST
     */
    disabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelsCameraST
     */
    recording: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    rtsp_url: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    updated_ts: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsCameraST
     */
    url: string;
}

/**
 * Check if a given object implements the ModelsCameraST interface.
 */
export function instanceOfModelsCameraST(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_ts" in value;
    isInstance = isInstance && "disabled" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "recording" in value;
    isInstance = isInstance && "rtsp_url" in value;
    isInstance = isInstance && "updated_ts" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function ModelsCameraSTFromJSON(json: any): ModelsCameraST {
    return ModelsCameraSTFromJSONTyped(json, false);
}

export function ModelsCameraSTFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsCameraST {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_ts': json['created_ts'],
        'disabled': json['disabled'],
        'id': json['id'],
        'name': json['name'],
        'recording': json['recording'],
        'rtsp_url': json['rtsp_url'],
        'updated_ts': json['updated_ts'],
        'url': json['url'],
    };
}

export function ModelsCameraSTToJSON(value?: ModelsCameraST | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_ts': value.created_ts,
        'disabled': value.disabled,
        'id': value.id,
        'name': value.name,
        'recording': value.recording,
        'rtsp_url': value.rtsp_url,
        'updated_ts': value.updated_ts,
        'url': value.url,
    };
}

