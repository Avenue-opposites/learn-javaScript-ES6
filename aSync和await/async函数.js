//ES6引入异步函数,可以像写同步一样写异步

//aysnc函数 
//1.其返回值是一个Promise对象,对象的值由aysnc函数执行的返回值决定
async function fn1() {
    //返回值如果不是一个Promise对象,那么aysnc函数返回的Promise就是成功的,并且该对象的结果就是返回值
    return "我是fn1函数返回的Promise对象的结果";
    //返回一个错误对象,则async函数返回的值为一个失败的Promise对象,结果为返回的错误对象
    // return new Error();
    //如果返回一个Promise对象,那么aysnc函数返回的Promise对象的状态和结果就和返回的Promise一样
    // return new Promise((resolve,reject) => {
    //     resolve("我是fn1函数返回的Promise对象的成功结果");
    //     reject("我是fn1函数返回的Promise对象的失败结果");
    // });
};//等同于
function fn2() {
    return new Promise((resolve,reject) => {
        resolve("我是fn2函数返回的Promise对象的结果")
    });
}
let result1 = fn1();
let result2 = fn2();
console.log(result1);//[[PromiseResult]]: "我是fn函数返回的Promise对象的结果"
console.log(result2);


