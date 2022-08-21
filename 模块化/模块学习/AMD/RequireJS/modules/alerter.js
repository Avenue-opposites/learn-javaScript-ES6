//定义有依赖的模块
//参数:依赖的模块,和一个回调,回调接收一个参数,该参数是依赖的模块
define(["dataService"],function(dataService) {
    let name = "alerter.js";
    function getName() {
        return name;
    }
    function getDependment() {
        return dataService;
    };
    const alerter = {getName,getDependment};
    //暴露模块
    return alerter;
});