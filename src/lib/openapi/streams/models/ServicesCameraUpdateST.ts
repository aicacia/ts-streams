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
 * @interface ServicesCameraUpdateST
 */
export interface ServicesCameraUpdateST {
    /**
     * 
     * @type {boolean}
     * @memberof ServicesCameraUpdateST
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServicesCameraUpdateST
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServicesCameraUpdateST
     */
    recording?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ServicesCameraUpdateST
     */
    rtsp_url?: string;
    /**
     * 
     * @type {string}
     * @memberof ServicesCameraUpdateST
     */
    url?: string;
}

/**
 * Check if a given object implements the ServicesCameraUpdateST interface.
 */
export function instanceOfServicesCameraUpdateST(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServicesCameraUpdateSTFromJSON(json: any): ServicesCameraUpdateST {
    return ServicesCameraUpdateSTFromJSONTyped(json, false);
}

export function ServicesCameraUpdateSTFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicesCameraUpdateST {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'recording': !exists(json, 'recording') ? undefined : json['recording'],
        'rtsp_url': !exists(json, 'rtsp_url') ? undefined : json['rtsp_url'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ServicesCameraUpdateSTToJSON(value?: ServicesCameraUpdateST | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disabled': value.disabled,
        'name': value.name,
        'recording': value.recording,
        'rtsp_url': value.rtsp_url,
        'url': value.url,
    };
}

