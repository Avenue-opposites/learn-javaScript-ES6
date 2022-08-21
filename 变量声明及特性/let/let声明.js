//1.变量不能重复声明
// let a = 1;
// let a = 1;

//2.块级作用域 let声明时会绑定最近的块
// {
//     let a = 1;
// }
// console.log(a);// a is not defined

//if,else块级作用域
// if(false) {
//     let a = 1;
//     console.log("if = "+a);// 1
// }else {
//     let a = 2;
//     console.log("false = "+a);// 2
// }
//console.log(a);// a is not defined

//for块级作用域
// for(let i = 1; i <= 3; i++) {
//     console.log(i);
// }
// console.log(i);// i is not defined

//while块级作用域
// let i = 1;
// while (i <= 1) {
//     let j = "得不到我";
//     console.log(j);// 得不到我
//     i++;
// }
// console.log(j);//j is not defined

//eval作用域
// eval("var a = 1");//var声明没有块级作用域
// console.log(a);// 1

// eval("let a = 1");//因为let会绑定到最近的块作用域
// console.log(a);// a is not defined

//3.不存在变量提升
// console.log(a);// undefined
// var a = 1;
// console.log(b);// ReferenceError: Cannot access 'b' before initialization
// let b = 2;

//4.不影响作用域链
// {
//     let hometown = "江西";
//     function fn() {
//         console.log(hometown);
//     }
//     fn();
// }