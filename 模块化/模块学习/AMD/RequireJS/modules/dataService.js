//定义没有依赖的模块
define(function() {
    let name = "dataService.js";
    function getName() {
        return name;
    };
    const dataService = {getName};
    //暴露模块
    return dataService;
});