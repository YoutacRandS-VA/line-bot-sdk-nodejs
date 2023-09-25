/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FlexComponent } from './flexComponent';


import { FlexComponentBase } from './models';
export type FlexIcon = FlexComponentBase &  { 
    type: "icon",
    /**
    */
    'url'?: string/**/;
    /**
    */
    'size'?: string/**/;
    /**
    */
    'aspectRatio'?: string/**/;
    /**
    */
    'margin'?: string/**/;
    /**
    */
    'position'?: FlexIcon.PositionEnum/**/;
    /**
    */
    'offsetTop'?: string/**/;
    /**
    */
    'offsetBottom'?: string/**/;
    /**
    */
    'offsetStart'?: string/**/;
    /**
    */
    'offsetEnd'?: string/**/;
    /**
    */
    'scaling'?: boolean/**/;
}

export namespace FlexIcon {
    export enum PositionEnum {
        Relative = <any> 'relative',
        Absolute = <any> 'absolute'
    }
}
