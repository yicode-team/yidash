/**
 * @file 跟正则相关的东西在这里
 * @module 正则
 */

/**
 * @name 火车车次
 * @author 陈随易 <https://chensuiyi.com>
 * @returns {RegExp}
 * @summary /^[GCDZTSPKXLY1-9]\d{1,4}$/
 * @example
 * import { regexp_TrainNumber } from 'yidash';
 * // regexp_TrainNumber 对应的值如下，请根据情况，选择对应的正则表达式
 * regexp_TrainNumber = {
 *      default:/^[GCDZTSPKXLY1-9]\d{1,4}$/,
 *      type2:/ddddd/
 * }
 */
export const regexp_TrainNumber = {
    /**
     * @default 默认正则
     */
    default: /^[GCDZTSPKXLY1-9]\d{1,4}$/,
};
