const express = require('express');
const app = express();
app.get('/home',(requset,response) => {
    // response.setHeader('Access-Control-Allow-Origin','*');
    // response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('同源策略');
    //响应一个页面
    //__dirname 主要用以获取当前文件的目录
    //__filename 主要用以获取当前文件的文件名
    response.sendFile(`${__dirname}/index.html`)
    // response.sendFile(__dirname+'/index.html')
});
app.get('/data',(request,response) => {
    response.send("用户数据");  
});
app.listen(9000,() => {
    console.log("正在监听9000端口,服务已经启动...");
})