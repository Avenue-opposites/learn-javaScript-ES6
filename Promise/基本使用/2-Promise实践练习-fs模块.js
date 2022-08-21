//引入"fs"模块
const fs = require('fs');
//回调函数形式
//read读取
//File 文件
//参数：1.文件路径 2.回调函数(错误信息,文件数据)
// fs.readFile('./resource/Content.txt',(error,data) => {
//     //如果出错,则抛出error
//     if(error) throw error
//     console.log(data.toString()); 
// });

//Promise 形式
let p = new Promise((resolve,reject) => {
    fs.readFile('./resource/Content.txt',(error,data) => {
        if(error) reject(error);
        resolve(data);
    });
});
p.then( value => {
    console.log(value.toString());
},reason => {
    console.error(reason); 
})