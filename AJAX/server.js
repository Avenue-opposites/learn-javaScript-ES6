//这是服务端
//引入express
const express = require('express');
//创建返回对象
let resultObject = {
    imgUrl:"url(/图片库/动漫网页/二次元/wallhaven-rdgqkj_2440x3500.png)",
    FGO:[
        "杀生院祈荒","始皇帝","梵高"
    ],
};
// const { request, response } = express;
//创建应用对象
const app = express();
//设置路由规则
app.get('/server',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send(resultObject);
});
let port = 8000;
app.listen(port,() => {
    console.log(`已经启动,正在监听${port}端口....`);
});

app.post('/server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(resultObject);
});
//设置全部请求的路由规则
app.all('/json-server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send(resultObject);//返回对象,默认自动转换为JSON对象
});
//安装nodeMon包 可以在服务启动中自动刷新服务
//IE缓存
app.get('/ie',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('ie!');
});
//延时响应
app.get('/delay',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时响应');
    },3000);
});
//jQuery 服务
app.all('/jQuery-server',(request,response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');

    // setTimeout(() => {
        response.send(resultObject);
    // },3000);
    
});
//axios 服务
app.all('/axios-server',(request,response) => {
    // 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Method', '*') 
    response.send("Hello axios!");
});
//fetch
app.all('/fetch-server',(request,response) => {
    //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send("Hello fetch!");
});
//jsonp 服务
app.all('/jsonp-server',(request,response) => {
    const data = {
        name:"pzp"
    }
    let str = JSON.stringify(data);
    //end方法发送没有特殊的响应头
    response.end(`handle(${str})`);
    // response.send('console.log("hello jsonp!")');
});
//用户名检测是否存在
app.all('/checx-username',(request,response) => {
    const data = {
        exist:1,
        msg:"用户名已经存在"
    };
    //转换成json字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});
//jQuery jsonp 服务
app.all('/jQuery-jsonp-server',(request,response) => {
    let str = JSON.stringify(resultObject);
    //接收请求中的参数
    let callback = request.query.callback;
    response.end(`${callback}(${str})`);
})
//CORS 服务
app.all('/cors-server',(requset,response) => {
    //允许任何源头发送请求
    response.setHeader('Access-Control-Allow-Origin','*');
    //允许任何请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //允许任何类型请求方法
    response.setHeader('Access-Control-Allow-Method','*');

    response.send('hello cors!');
});
