{
    function add(a,b) {
        if(isNaN(a) || isNaN(b)) {
            console.error('is nan!');
        }else {
            return a+b;
        }
    }
    function xxx(a,b) {
        if(isNaN(a) || isNaN(b)) {
            console.error('is nan!');
        }else {
            return a*b;
        }
    }
}
//exports 可以将变量和函数暴露
// exports.mds = {add,xxx};
//module.exports可以使用对象
module.exports = {add,xxx};//可行
//exports = {add,xxx};//不可行 这样修改了它的引用
//console.log(module.exports == exports);//true 因为exports变量保存的是对module。exports的引用 
/*
var module = {
    exports:{}
};
var exports = module.exports;
所以exports = {};不行
*/


