// 1.await表达式 只能写在aysnc函数中
// 2.await右侧的表达式一般为Promise对象
// 3.await返回的是Promise对象成功的值
// 4.await返回的Promise对象失败了,就会抛出异常,需要使用try...catch捕捉处理


//语法: [返回值] = await 表达式;
//表达式:一个 Promise 对象或者任何要等待的值。
//返回值:返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

//创建一个Promise对象
const p = new Promise((resolve,reject) => {
    // resolve("我是Promise对象成功的值");
    reject("我是Promise对象失败的值");
});
async function fn() {
    try {
        let result = await p;
        console.log(result);
    }catch(err) {
        console.warn(err);
    }
};
fn();