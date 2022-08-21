//定义一个有依赖的模块
(function() {
    let module2Name = "module2.js";
    function getName2() {
        alert(module2Name+" and "+module1.getName());
    };
    //浏览器环境使用window,node环境使用globalThis
   globalThis.module2 = {getName2}; 
})();
// console.log(module1.getName());