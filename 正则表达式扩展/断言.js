//先行断言 x(?=y) 零宽正先行断言————只有在断言y在x的后边时，才会继续匹配
//声明字符串
// let str = "破势是输出御魂,招财猫是辅助御魂,雪幽魂是控制御魂,火灵是辅助御魂";
// //声明正则匹配招财猫
// let reg = /[^,]+(?=是辅助御魂)/g;//匹配"是辅助御魂"前面除了,之后的所有字符
// // let reg = /.+(?=是输出御魂)/;
// let result1 = reg.test(str);
// let result2 = reg.exec(str);
// console.log(result1);//true
// console.log(result2);//招财猫

//负先行断言 x(?!y)零宽负先行断言————只有在断言y不在x的后边时，才会继续匹配
// let str = "abc,123,abcd,123,aBc,456";
// //匹配abc但是还没不能紧跟,123
// let reg = /abc(?!,123)/m;
// let result1 = reg.test(str);
// let result2 = reg.exec(str);
// console.log(result1);
// console.log(result2);

//后行断言 (?<=y)x 零宽正后行断言————只有在断言y在x的前边时，才会继续匹配
// let str = "sp炼狱茨木童子,ssr不见岳,sr镰鼬,r山兔";
// //匹配不见岳
// let reg = /(?<=ssr)[^,]+/;
// let result1 = reg.test(str);
// let result2 = reg.exec(str);
// console.log(result1);
// console.log(result2);

//负后行断言 (?<!y)x 零宽负后行断言————只有在断言y不在x的前边时，才会继续匹配
// let str = "The cat and Cat";
// //匹配前面不是The的cat
// let reg = /(?<!The\s)cat/i;
// let result1 = reg.test(str);
// let result2 = reg.exec(str);
// console.log(result1);
// console.log(result2);

let str = `<ul id="box">
                <li class="name">姓名:阿修罗</li>
                <li class="age">年龄:20</li>
                <li class="gender">性别:男</li>
            </ul>`;
//匹配id
// let reg = /(?<=id=").+(?=">)/i;
//匹配class
// let reg = /(?<=class=").+(?=">)/g;
//匹配li的内容
let reg = /(?<=">).+(?=<\/li>)/g;
// let result1 = reg.test(str);
let result2 ;
// console.log(result1);
while(result2 = reg.exec(str)) {
    console.log(result2);
}




