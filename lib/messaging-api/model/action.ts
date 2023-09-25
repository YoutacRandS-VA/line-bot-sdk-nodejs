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

import { CameraAction } from './models';
import { CameraRollAction } from './models';
import { DatetimePickerAction } from './models';
import { LocationAction } from './models';
import { MessageAction } from './models';
import { PostbackAction } from './models';
import { RichMenuSwitchAction } from './models';
import { URIAction } from './models';

export type Action =
        | CameraAction // camera
        | CameraRollAction // cameraRoll
        | DatetimePickerAction // datetimepicker
        | LocationAction // location
        | MessageAction // message
        | PostbackAction // postback
        | RichMenuSwitchAction // richmenuswitch
        | URIAction // uri
;

/**
* Action
*/
export type ActionBase =  { 
    /**
    * Type of action
    */
    'type'?: string/**/;
    /**
    * Label for the action.
    */
    'label'?: string/**/;
}

