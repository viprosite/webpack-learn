/* eslint-disable no-useless-escape */

/**
 *  给正则传参方法：
 *  let n = 3
 *  new RegExp(`^\\d{${n}}$`)  \需要转义！！！ （在控制台写构造正则可实时查看最终的正则）
 **/

export default {
  /**
   * @description 纯数字 可正负 带小数
   * */
  number: (str) => {
    return RegExp(/^-?\d*\.?\d+$/).test(str);
  },

  /**
   * @description n位的正整数
   * @param str 检测的字符串
   * @param n 要求的位数
   * @returns boolean
   */
  nPositiveInt: (str, n) => {
    return new RegExp(`^\\d{${n}}$`).test(str);
  },

  /**
   * @description 至少n位正整数
   * @param str 检测的字符串
   * @param n 要求的位数
   * @returns boolean
   */
  nMorePositiveInt: (str, n) => {
    return new RegExp(`^\\d{${n},}$`).test(str);
  },

  /**
   * @description  m-n位正整数
   * @param str 检测的字符串
   * @param m 要求的最小位数
   * @param n 要求的最大位数
   * @returns boolean
   */
  mnPositiveInt: (str, m, n) => {
    return new RegExp(`^\\d{${m},${n}}$`).test(str);
  },

  /**
   * @description 整数
   */
  integer: (str) => {
    return RegExp(/^-?\d+$/).test(str);
  },

  /**
   * @description 正整数
   */
  positiveInteger: (str) => {
    return RegExp(/^\d+$/).test(str);
  },

  /**
   * @description 非正整数（负整数 + 0）
   */
  nonPositiveInteger: (str) => {
    return RegExp(/^-[1-9]\d*|0$/).test(str);
  },

  /**
   * @description 负整数
   */
  negtiveInteger: (str) => {
    return RegExp(/^-\d+$/).test(str);
  },

  /**
   * @description 正数
   */
  positive: (str) => {
    return RegExp(/^\d*\.?\d+$/).test(str);
  },

  /**
   * @description 正数、负数、和小数
   */
  positiveNegative: (str) => {
    return RegExp(/^(\-|\+)?\d+(\.\d+)?$/).test(str);
  },

  /**
   * @description 负数
   */
  negative: (str) => {
    return RegExp(/^-\d*\.?\d+$/).test(str);
  },

  /**
   * @description 非负整数（正整数 + 0）
   */
  nonNegtiveInteger: (str) => {
    return RegExp(/^[1-9]\d*|0$/).test(str);
  },

  /**
   * @description 非零的负整数
   */
  nonZeroNegativeInteger: (str) => {
    return RegExp(/^\-[1-9][0-9]*$/).test(str);
  },

  /**
   * @description 非零的正整数
   */
  nonZeroPositiveInteger: (str) => {
    return RegExp(/^\+?[1-9][0-9]*$/).test(str);
  },

  /**
   * @description 浮点数
   */
  floatPoint: (str) => {
    return RegExp(/^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/).test(str);
  },

  /**
   * @description 正浮点数
   */
  positiveFloatingPoint: (str) => {
    return RegExp(/^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/).test(str);
  },

  /**
   * @description  非正浮点数（负浮点数 + 0）
   */
  nonPositiveFloatingPoint: (str) => {
    return RegExp(/^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/).test(str);
  },

  /**
   * @description 负浮点数
   */
  negativeFloatingPointNumber: (str) => {
    return RegExp(/^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/).test(str);
  },

  /**
   * @description 非负浮点数（正浮点数 + 0）
   */
  nonNegativeFloatingPointNumber: (str) => {
    return RegExp(/^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/).test(str);
  },

  /**
   * @description 非零开头的最多带两位小数的数字
   */
  birth: (str) => {
    return RegExp(/^([1-9][0-9]*)+(.[0-9]{1,2})?$/).test(str);
  },

  /**
   * @description 有1-4位小数的正实数
   */
  positiveRealNumber: (str) => {
    return RegExp(/^[0-9]+(.[0-9]{1,4})?$/).test(str);
  },
};
