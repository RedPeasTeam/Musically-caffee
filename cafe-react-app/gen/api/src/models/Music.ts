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
 * @interface Music
 */
export interface Music {
    /**
     * 
     * @type {string}
     * @memberof Music
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Music
     */
    genre?: string;
    /**
     * 
     * @type {string}
     * @memberof Music
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof Music
     */
    music?: string;
    /**
     * 
     * @type {string}
     * @memberof Music
     */
    avatar?: string;
}

export function MusicFromJSON(json: any): Music {
    return MusicFromJSONTyped(json, false);
}

export function MusicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Music {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': !exists(json, 'image') ? undefined : json['image'],
        'genre': !exists(json, 'genre') ? undefined : json['genre'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'music': !exists(json, 'music') ? undefined : json['music'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
    };
}

export function MusicToJSON(value?: Music | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
        'genre': value.genre,
        'author': value.author,
        'music': value.music,
        'avatar': value.avatar,
    };
}

