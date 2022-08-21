//定义无依赖模块
(function() {
    let moduleName = "module1.js";
    function getName() {
        return moduleName;
    };
    //浏览器环境使用window,node环境使用globalThis
   globalThis.module1 = {getName}; 
})();
// console.log(module1.getName());