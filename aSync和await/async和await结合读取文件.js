//引入文件系统模块
//没有转换不能在浏览器运行
const fs = require("fs");
//异步读取文件
function readOnefile() { 
    //返回Promise对象
    return new Promise((resolve,reject) => {
        //读取1号文件
        fs.readFile("./测试文件/1号文件.txt",(err,data) => {
            //如果读取失败就把Promise对象变成失败状态
            if(err) reject(err);
            //如果读取成功就把Promise对象变成成功状态
            resolve(data);
        });
    });
};

function readTwofile() { 
    //返回Promise对象
    return new Promise((resolve,reject) => {
        //读取2号文件
        fs.readFile("./测试文件/2号文件.txt",(err,data) => {
            //如果读取失败就把Promise对象变成失败状态
            if(err) reject(err);
            //如果读取成功就把Promise对象变成成功状态
            resolve(data);
        });
    });
};

function readThreefile() { 
    //返回Promise对象
    return new Promise((resolve,reject) => {
        //读取3号文件
        fs.readFile("./测试文件/3号文件.txt",(err,data) => {
            //如果读取失败就把Promise对象变成失败状态
            if(err) reject(err);
            //如果读取成功就把Promise对象变成成功状态
            resolve(data);
        });
    });
};
async function readFild() {
    try {
        //如果其中一个Promise对象失败就会停止执行try部分,导致其他代码不会执行
        //所以要使用错误处理
        let result1 = (await readOnefile()).toString();
        let result2 = (await readTwofile()).toString();
        let result3 = (await readThreefile()).toString();
        console.log(result1);
        console.log(result2);
        console.log(result3);
    }catch(err) {
        console.warn(err.path);
        
    }
};
readFild();