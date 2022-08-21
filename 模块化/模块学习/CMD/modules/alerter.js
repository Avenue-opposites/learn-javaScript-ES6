define(function(require,exports,module) {
    let name = "alerter.js";
    function getName() {
        return name;
    };
    //同步引入
    let dataService = require("./dataService");
    let dataServiceName = dataService.getName();
    module.exports = {getName,dataServiceName}
    //异步引入
    // require.async("./dataService",function(dataService) {
    //     console.log(dataService.getName());
    //     console.log("我是异步任务!");
    // });
    // module.exports = {getName};
});