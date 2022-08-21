"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//默认暴露 可以暴露任意数据类型
var _default2 = {
  name: "阿修罗",
  age: 20,
  gender: "男",
  "default": function _default() {
    console.log("我是默认就会暴露的");
  }
};
exports["default"] = _default2;