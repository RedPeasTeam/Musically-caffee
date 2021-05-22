/* tslint:disable */
/* eslint-disable */
/**
 * Musically Cafe
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Caffee
 */
export interface Caffee {
    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    caffeedescription?: string;
    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    companyname?: string;
    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    city?: string;

    /**
     * 
     * @type {string}
     * @memberof Caffee
     */
    image?: string;

}

export function CaffeeFromJSON(json: any): Caffee {
    return CaffeeFromJSONTyped(json, false);
}

export function CaffeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Caffee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'caffeedescription': !exists(json, 'caffeedescription') ? undefined : json['caffeedescription'],
        'companyname': !exists(json, 'companyname') ? undefined : json['companyname'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'image': !exists(json, 'image') ? undefined : json['image'],

    };
}

export function CaffeeToJSON(value?: Caffee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': value.address,
        'caffeedescription': value.caffeedescription,
        'companyname': value.companyname,
        'city': value.city,
        'image': value.image,

    };
}


