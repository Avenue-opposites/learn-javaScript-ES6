//1.引入express
// const { request, response } = require('express');
const express = require('express');
//创建应用对象
const app = express();
//创建路由规则
//request(请求) 是对请求报文的封装
//response(响应) 是对响应报文的封装
app.get('/',(request,response) => {
    response.send('<h1>Hello,Express!</h1>');
});
//监听端口启动服务
app.listen(8000,() => {
    console.log("服务已启动,8000 端口监听中....")
});
//终端输入node 文件名加扩展名 启动服务端
