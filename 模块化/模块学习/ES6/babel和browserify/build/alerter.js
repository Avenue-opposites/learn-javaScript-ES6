"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dataServiceName", {
  enumerable: true,
  get: function get() {
    return _dataService.getName;
  }
});
exports.getName = getName;

var _dataService = require("./dataService.js");

var name = "alerter.js";

function getName() {
  return name;
}

;