"use strict";

var _alerter = require("./alerter.js");

var _default = _interopRequireDefault(require("./default.js"));

var _vue = _interopRequireDefault(require("../libs/vue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//主文件
//npm run 指令
//分别引入
//默认引入
//引入vue2.0
console.log((0, _alerter.dataServiceName)());
console.log((0, _alerter.getName)());
console.log(_default["default"]);

_default["default"]["default"]();

var app = new _vue["default"]({
  el: "#app",
  data: {
    message: "Hello,Vue!"
  }
});