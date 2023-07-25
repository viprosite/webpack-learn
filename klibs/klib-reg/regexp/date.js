/* eslint-disable no-useless-escape */
export default {
  /**
   * @description 出生年月日
   * */
  birth: (str) => {
    return RegExp(
      /^(19|20)\d{2}\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2]\d)|3[01])$/
    ).test(str);
  },

  /**
   * @description 日期格式，已考虑平闰年：yyyy-mm-dd
   */
  yyyymmdd: (str) => {
    return RegExp(
      /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/
    ).test(str);
  },

  /**
   * @description  日期格式，已考虑平闰年：yyyyMMdd
   */
  yyyyMMdd: (str) => {
    return RegExp(
      /^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/
    ).test(str);
  },

  /**
   * @description  日期正则，简单判定，未做月份及日期的判定 xxxx-xx-xx
   */
  simpleDate: (str) => {
    return RegExp(/^\d{4}(\-)\d{1,2}\1\d{1,2}$/).test(str);
  },

  /**
   * @description  日期正则，复杂判定
   */
  complexDate: (str) => {
    return RegExp(
      /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
    ).test(str);
  },

  /**
   * @description  月份，格式："01"-"09"和"1"-"12"
   */
  month: (str) => {
    return RegExp(/^(0?[1-9]|1[0-2])$/).test(str);
  },

  /**
   * @description  一个月的31天，格式：01、09和1、31
   */
  day: (str) => {
    return RegExp(/^((0?[1-9])|((1|2)[0-9])|30|31)$/).test(str);
  },

  /**
   * @description 12小时制，hh:mm:ss
   */
  hours12: (str) => {
    return RegExp(/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/).test(str);
  },

  /**
   * @description 24小时制，hh:mm:ss
   */
  hours24: (str) => {
    return RegExp(/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).test(str);
  },
};
