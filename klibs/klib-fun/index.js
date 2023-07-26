// 常量集合
import constant from "./core/constant/index.js";

// 字符串
import * as stringUtil from "./core/string/index.js";
// 数字
import * as numberUtil from "./core/number/index.js";
// 数组
import * as arrayUtil from "./core/array/index.js";
// 日期
import * as dateUtil from "./core/date/index.js";
// 对象
import * as objectUtil from "./core/object/index.js";
// 函数
import * as functionUtil from "./core/function/index.js";

// 正则
import * as regexpUtil from "./core/regexp/index.js";

// 数学
import * as mathUtil from "./core/math/index.js";

// 随机数
import * as randomUtil from "./core/random/index.js";

// 文件
import * as fileUtil from "./core/file/index.js";

// 颜色
import * as colorUtil from "./core/color/index.js";

// 校验
import * as validateUtil from "./core/validate/index.js";

// 键盘 Keycode
import * as keyCodeUtil from "./core/keycode/index.js";

// 浏览器 Url
import * as urlUtil from "./core/url/index.js";
// 浏览器 Cookie
import * as cookieUtil from "./core/cookie/index.js";
// 浏览器 Storage
import * as storageUtil from "./core/storage/index.js";
// 浏览器 Dom
import * as domUtil from "./core/dom/index.js";
// 浏览器 Device
import * as deviceUtil from "./core/device/index.js";

// 微信小程序工具类
import * as weappUtil from "./core/weapp/index.js";

// 导出
export default {
  // 常量集合
  ...constant,

  // 字符串
  ...stringUtil,
  // 数字
  ...numberUtil,
  // 数组
  ...arrayUtil,
  ...dateUtil,
  // 对象
  ...objectUtil,
  // 函数
  ...functionUtil,

  // 正则
  ...regexpUtil,

  // 数学
  ...mathUtil,

  // 随机数
  ...randomUtil,

  // 文件
  ...fileUtil,

  // 颜色
  ...colorUtil,

  // 校验
  ...validateUtil,

  // 键盘 Keycode
  ...keyCodeUtil,

  // 浏览器 Url
  ...urlUtil,
  // 浏览器 Cookie
  ...cookieUtil,
  // 浏览器 Storage
  ...storageUtil,
  // 浏览器 Dom
  ...domUtil,
  // 浏览器 Device
  ...deviceUtil,

  // 微信小程序
  ...weappUtil,
};
