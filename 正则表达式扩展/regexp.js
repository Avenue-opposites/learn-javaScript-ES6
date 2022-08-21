//正则表达式 命名捕获分组
// let reg = /^<a href="(?<url>.*)">(?<text>.*)<\/a>$/i;
// let str = '<a href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp" title="zh-CN/docs/JavaScript/Reference/Global Objects/RegExp">内容</a>';
// console.log(reg.test(str));
// let result = reg.exec(str);
// console.log(result);

let str = "15083515572";
let reg = /^[1][3-8]\d{9}$/;
// let reg = /1/;
let result1 = reg.test(str);
let result2 = reg.exec(str);
console.log(result1);
console.log(result2);
