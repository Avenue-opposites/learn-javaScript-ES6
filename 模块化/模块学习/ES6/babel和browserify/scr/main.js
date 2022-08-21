//主文件
//npm run 指令
//分别引入
import {getName,dataServiceName} from "./alerter.js";
//默认引入
import yys from "./default.js";
//引入vue2.0
import vue from "../libs/vue.js";
console.log(dataServiceName());
console.log(getName());
console.log(yys);
yys.default();
const app = new vue({
    el:"#app",
    data:{
        message:"Hello,Vue!"
    }
});

