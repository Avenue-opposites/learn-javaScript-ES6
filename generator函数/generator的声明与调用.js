//ES6 引入generator(生成器) 它是一个特殊的函数 
//异步编程 纯回调函数


//创建一个生成器函数 需要在函数声明中加 " * "
function * gen() {
    //yield(产出)运算符 
    //语法: [rv] = yield [expression(表达式)];
    //yield关键字使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。
    //它可以被认为是一个基于生成器的版本的return关键字。
    //相当于一个代码分割符
    //一旦遇到 yield 表达式，生成器的代码将被暂停运行，直到生成器的 next()方法被调用。
    //每次调用生成器的next()方法时，生成器都会恢复执行，直到达到以下某个值
    {
        //这里是被分割的第一部分
        //console.log("我是第一部分的代码!");
    }
    yield "阿修罗";
    {
        //这里是被分割的第二部分
        //console.log("我是第二部分的代码!");
    }
    yield "帝释天";
    {
        //这里是被分割的第三部分
        //console.log("我是第三部分的代码!");
    }
    yield "大岳丸";
    {
        //这里是被分割的第四部分
        //console.log("我是第四部分的代码!");
    }
};
//使用方法和迭代器一样
let iterator = gen();//返回一个对象,这个对象有一个next方法
//yield关键字实际返回一个IteratorResult对象，它有两个属性，value和done。
//value属性是对yield表达式求值的结果，而done是false，表示生成器函数尚未完全完成。
// console.log(iterator.next());//{ value: '阿修罗', done: false }
// console.log(iterator.next());//{ value: '帝释天', done: false }
// console.log(iterator.next());//{ value: '大岳丸', done: false }
// console.log(iterator.next());//{ value: undefined, done: true }
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();

//遍历表达式
for(let i of gen()) {
    console.log(i);
}



