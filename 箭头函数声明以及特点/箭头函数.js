//ES6 可以使用箭头 "() =>" 定义函数

//声明一个箭头函数
// let arrows = () => {
//     console.log("我是一个箭头函数！");
// }
// console.log(arrows);//[Function: arrows]

//一般的函数声明
// let fn = function() {
//     console.log("我是一个函数!");
// };

//1.箭头函数的this是静态的 this 始终指向箭头函数声明时所在作用域的this
function fn() {
    console.log(this.name);
};

let arrows = () => {
    console.log(this.name);
};

const OBJ = {
    name:"帝释天",
    fn,
    arrows
};

//普通函数的this指向调用者
//OBJ.fn();//帝释天
//箭头函数的this指向声明时所在作用域的this
//OBJ.arrows();//undefined

// setInterval(() => {
//     this.name = "阿修罗";
//     console.log(this.name);//阿修罗
// },3000);

//2.箭头函数不能作为构造函数实例化
// let Person = (name,age) => {
//     this.name;
//     this.age;
// }
// let p1 = new Person('阿修罗',20);
// console.log(p1);//TypeError: Person is not a constructor

//3.箭头函数不能使用garuments 但是可以使用rest参数
// function fn() {
//     for(let i in arguments) {
//         console.log(arguments[i]);//1 2 3 
//     }
// };

// let arrow = () => {
//     console.log(arguments);//arguments变成了模块状态对象
// };
// fn(1,2,3);
// arrow(1,2,3);

// //箭头函数没有原型
// let arrow = () => {
//     console.log("我没有prototype！");
// }
// console.log(arrow.prototype);//unedfined

//5.箭头函数的简写
//当形参只有一个是可以省略小括号
// let arrow = n => {
//     return n * 2;
// };
// console.log(arrow(2));//4

//当执行代码只有一条时可以省略大括号,return必须省略
// let add = (a,b) => a + b;
// console.log(add(1,2));//3

//箭头函数不能当做generator函数来使用,不能使用yield