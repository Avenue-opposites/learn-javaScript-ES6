//ES6 新增了Number的一些属性和方法

//Number.EPSILON 表示的是JavaScript中的最小精度
let epsilon = Number.EPSILON;
//console.log(epsilon);//2.220446049250313e-16
//js中我们认为两个数的差小于epsilon,这两个数就相等
//let a = 0.1 + 0.2;
//console.log(a);//0.30000000000000004
//封装一个函数判断是否相等
// function equal(a,b) {
//     if(Math.abs(a - b) < epsilon) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(equal(a,0.3));//true
// console.log(equal(a,0.300000000000004));//false


// //二进制
// let b = 0b10;
// // 八进制
// let o = 0o10;
// // 十进制
// let s = 10;
// // 十六机制
// let x = 0x10;
// console.log(b,o,s,x);//2 8 10 16



//Number.isFinite() 检查一个数值是否为有限数
// let n = 100;
// let result = Number.isFinite(n);
// console.log(result);//true



//Number.parseInt() 取整和截取字符串的数字
// let str = '12344哈哈哈';
// let num = Number.parseInt(str);
// console.log(num);//12344



//Number.trunc() 抹除小数部分
//Number.sign()判断一个数是正数(1)，负数(-1)，还是零(0)