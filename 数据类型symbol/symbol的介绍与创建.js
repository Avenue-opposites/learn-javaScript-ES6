//ES6 引入了Symbol基本数据类型,表示独一无二的值
//Symbol的特点
//1.Symbol是唯一的,可以用来解决命名冲突
//2.Symbol数据类型,不能与其他数据类型进行运算
//3.Symbol定义的对象不能使用for...in循环,但是可以使用reflect.ownKeys()来获取对象的所有键名

//创建Symbol
let s =  Symbol("name");//参数是标识,方便我们知道这个Symbol是什么作用
//console.log(s,typeof s);//Symbol(name),symbol

//Symbol就算标识一样,但是代表的值是不一样的
let s1 = Symbol("阿修罗");
let s2 = Symbol("阿修罗");
//console.log(s1 === s2);//false

//Symbol.for(key)方法 内置一个Symbol全局表它保存了全局注册的Symbol,
//它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个Symbol
let dst = Symbol("帝释天");
let dst1 = Symbol.for("帝释天");
let dst2 = Symbol.for("帝释天");
//console.log(dst === dst1);//false
//console.log(dst1 === dst2);//true

//Symbol不能与其他数据类型进行运算
//let result = s + 100;//TypeError: Cannot convert a Symbol value to a number