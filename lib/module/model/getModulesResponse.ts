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
import { ModuleBot } from './moduleBot';


/**
* List of bots to which the module is attached
*/
export type GetModulesResponse =  { 
    /**
    * Array of Bot list Item objects representing basic information about the bot.
    */
    'bots': Array<ModuleBot>/**/;
    /**
    * Continuation token. Used to get the next array of basic bot information. This property is only returned if there are more unreturned results. 
    */
    'next'?: string/**/;
}

