//引入express
const express = require("/wod/NodeJS/node_global_modules/node_modules/express");
//创建入口
const app = express();
//设置路由规则,接收请求
app.all('/server',(request,response) => {
    //允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //允许任何请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //允许任何类型请求方法
    response.setHeader('Access-Control-Allow-Method','*');
    //返回响应
    response.send("async和await测试成功...");
});
app.listen(3000,() => {
    console.log("正在监听3000端口.....");
})