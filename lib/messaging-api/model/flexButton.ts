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
import { Action } from './action';
import { FlexComponent } from './flexComponent';


import { FlexComponentBase } from './models';
export type FlexButton = FlexComponentBase &  { 
    type: "button",
    /**
    */
    'flex'?: number/**/;
    /**
    */
    'color'?: string/**/;
    /**
    */
    'style'?: FlexButton.StyleEnum/**/;
    /**
    */
    'action'?: Action/**/;
    /**
    */
    'gravity'?: FlexButton.GravityEnum/**/;
    /**
    */
    'margin'?: string/**/;
    /**
    */
    'position'?: FlexButton.PositionEnum/**/;
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
    'height'?: FlexButton.HeightEnum/**/;
    /**
    */
    'adjustMode'?: FlexButton.AdjustModeEnum/**/;
    /**
    */
    'scaling'?: boolean/**/;
}

export namespace FlexButton {
    export enum StyleEnum {
        Primary = <any> 'primary',
        Secondary = <any> 'secondary',
        Link = <any> 'link'
    }
    export enum GravityEnum {
        Top = <any> 'top',
        Bottom = <any> 'bottom',
        Center = <any> 'center'
    }
    export enum PositionEnum {
        Relative = <any> 'relative',
        Absolute = <any> 'absolute'
    }
    export enum HeightEnum {
        Md = <any> 'md',
        Sm = <any> 'sm'
    }
    export enum AdjustModeEnum {
        ShrinkToFit = <any> 'shrink-to-fit'
    }
}
