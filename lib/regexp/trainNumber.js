/**
 * @category 正则
 * @module 火车车次
 */

/**
 * @name 火车车次
 * @author 陈随易 <https://chensuiyi.com>
 * @returns {RegExp}
 * @summary /^[GCDZTSPKXLY1-9]\d{1,4}$/
 * @example
 * import { trainNumber } from 'yidash';
 * // trainNumber 对应的值如下，请根据情况，选择对应的正则表达式
 * trainNumber = {
 *      default:/^[GCDZTSPKXLY1-9]\d{1,4}$/,
 *      type2:/ddddd/
 * }
 */
export const trainNumber = {
    /**
     * @default 默认正则
     */
    default: /^[GCDZTSPKXLY1-9]\d{1,4}$/,
};
