//设置入口文件
define(function(require) {
    //引入模块
    let alerter = require("./modules/alerter");
    console.log(alerter.dataServiceName);
    console.log(alerter.getName());
});