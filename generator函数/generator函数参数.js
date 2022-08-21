//创建一个生成器
function * gen(a = 1) {
    console.log("我前面没有yield,所以没有参数");
    let result = yield a;
    console.log(`我是next的参数：${result}`);
    let result1 = yield a + 1;
    console.log(`我是next的参数：${result1}`);
};
let iterator = gen();
// console.log(iterator.next().value);// 1
// console.log(iterator.next().value);// 2
// console.log(iterator.next().value);// undefined
//next方法可以传入实参 这个参数会变成下个yield的返回结果
//console.log(iterator.next("可恶,系统快给我安排一个yield!"));
//console.log(iterator.next("上面yield a 的返回值"));
//console.log(iterator.next("上面yield a + 1 的返回值"));

