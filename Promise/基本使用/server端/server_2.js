const express = require('express');
const app = express();
app.listen(9000,() => {
    console.log("正在监听9000端口,启动完毕...");
});
app.all('/Promise-ajax',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    // response.sendFile()
    // response.statusCode = 404;
    response.send("Hello,Promise");
});