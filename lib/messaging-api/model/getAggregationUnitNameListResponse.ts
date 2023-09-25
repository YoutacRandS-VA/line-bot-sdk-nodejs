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


export type GetAggregationUnitNameListResponse =  { 
    /**
    * An array of strings indicating the names of aggregation units used this month.
    */
    'customAggregationUnits': Array<string>/**/;
    /**
    * A continuation token to get the next array of unit names. Returned only when there are remaining aggregation units that weren\'t returned in customAggregationUnits in the original request.  
    */
    'next'?: string/**/;
}

