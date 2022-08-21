//ES6语法 使用export接口暴露变量和函数

// 默认导出 使用默认导出会覆盖其他的接口
// export default {
//      a:1,
//     mod() {
//     console.log("我是被引入的模块");
//     }
// };

//单个导出
// export let a = 1;
// export function mod() {
//     console.log("我是被引入的模块");
// }

// 导出列表
let name1 = "阿修罗";
let name2 = "帝释天";
export { name1, name2};

// 重命名导出
export { name1 as variable1, name2 as variable2};

// 解构导出并重命名
const obj = {
    a:1,
    b:2
} 
export let { a,b:c } = obj;

