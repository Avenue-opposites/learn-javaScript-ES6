//默认暴露 可以暴露任意数据类型
export default {
    name:"阿修罗",
    age:20,
    gender:"男",
    default() {
        console.log("我是默认就会暴露的");
    }
};