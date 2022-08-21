let str = "       abcd       ";
//String.trim()方法 修剪字符串两旁的空白字符
let result1 =  str.trim();
//console.log(result1);//abcd
//String.trimStart()方法 修剪字符串左侧的空白字符
let result2 = str.trimStart();
//console.log(result2);
//String.trimEnd()方法 修剪字符串右侧的空白字符
let result3 = str.trimEnd();
//console.log(result3);

//String.matchAll()方法 提取符合全部规则的字符串 返回一个可迭代字符串 可以通过for...of循环获取
let str1 = `<ul>
    <li class="name">姓名:阿修罗</li>
    <li class="age">年龄:20</li>
    <li class="gender">性别:男</li>
</ul>`;
//匹配className和内容
// let reg1 = /(?<=class=").+(?=">)/g;
let reg2 = /<li class="(?<className>.+)">(?<content>.+)<\/li>/g;
let result4 = str1.matchAll(reg2);
console.log(result4);
//使用扩展运算符也可以获取
console.log(...result4);
//获取匹配的字符串
// for(let v of result4) {
//     console.log(v.groups.className,v.groups.content);
// }
