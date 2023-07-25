/* eslint-disable no-useless-escape */
export default {
  /**
   * @description  符合 100,000,000.99 格式的金额
   * */
  money: (str) => {
    return RegExp(/^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$/).test(str);
  },

  /**
   * @description 小数点后只能有最多两位数字（可以有正负号）
   * */
  twoDigitNumber: (str) => {
    return RegExp(/^[+-]*(\d)*(\.\d{0,2})*$/).test(str);
  },

  /**
   * @description 任意一个不以0开头的数字，但是，这也意味着一个字符"0"不通过
   * */
  anyNumber: (str) => {
    return RegExp(/^(0|[1-9][0-9]*)$/).test(str);
  },

  /**
   * @description 一个0或者一个不以0开头的数字，还可以允许开头有一个负号
   * */
  exp1: (str) => {
    return RegExp(/^(0|-?[1-9][0-9]*)$/).test(str);
  },

  /**
   * @description 出现小数点则小数点后面必须有两位  10. 20.1不通过
   * */
  exp2: (str) => {
    return RegExp(/^[0-9]+(.[0-9]{2})?$/).test(str);
  },

  /**
   * @description 出现小数点则小数点后有一位或者两位
   * */
  exp3: (str) => {
    return RegExp(/^[0-9]+(.[0-9]{1,2})?$/).test(str);
  },
};
