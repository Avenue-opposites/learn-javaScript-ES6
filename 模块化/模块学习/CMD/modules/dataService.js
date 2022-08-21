//定义没有依赖的模块
define(function(require,exports,module) {
    let name = "dataService.js";
    function getName() {
        return name;
    };
    //两种方法暴露
    //统一暴露
    // exports.getName = getName;
    //分别暴露
    module.exports = {getName};
    // console.log(name);
});