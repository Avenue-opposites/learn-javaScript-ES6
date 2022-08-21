/*file system(文件系统)
    -通过Node操作文件系统中的文件
    -使用文件系统,需要引入fs模块
    -sync 同步操作 async 异步操作
    -openSync(path[,option]) r 只读的 w 可写的 该方法会返回一个描述符,可以通过描述符操作
    -writeSync(fd,buffer[,offset[,length[,position]]])
    -writeFileSync(file,data[,options]) 文件名或描述符
    -closeSync(fd)
    -existsSync(path) 检查文件是否存在
    -stat(path) 获取文件的状态,返回一个对象,通过回调函数的参数接收
    -unlink(path) 删除文件
    -readdir(path) 读取目录结构
    -turncate(path,length,callback) 设置文件大小
    -wtachFile(fileName[,options],listener) 监听文件变化 
        回调参数：curr 当前文件状态
                 prev 修改前文件状态
            这两个都是stats对象
*/
const fs = require('fs');
//打开文件 
// let fd = fs.openSync('hello.txt','r');
// console.log(fd);//3 
// //写入文件 同步写入
// // fs.writeSync(fd,'---出头了!',2);
// fs.closeSync(fd);

let d = '阴阳师.txt';

//异步写入
// console.log('start');
// fs.open(d,'w',function(error,fd){
//     if(error) {
//         throw error;
//     }else {
//         // console.log('回调函数');
//         fs.write(fd,'好',function(err) {
//             if(err) {
//                 throw err;
//             }else {
//                 console.log('写入成功！');
//                 fs.close(fd,function(err) {
//                     if(err) {
//                         throw err;
//                     }else {
//                         console.log('关闭成功！');
//                     }
//                 })
//             }
//         });
//     }
// });
// console.log('end');


// {
//     fs.writeFile(d,'招财猫',{flag:'a'},function(err) {
//         if(err) {
//             throw err;
//         }else {
//             console.log('写入成功!');
//         }
//     });  
// }


// {
// //同步读取
// let fd = fs.readFileSync(d);
// console.log(fd.toString());

// //异步读取
// let fd1 = fs.readFile(d,(err,data) => {
//     if(err) {
//         throw err;
//     }else {
//         fs.writeFile('hello.txt',data,{flag:'a'},(err) => {
//             console.log('写入成功');
//         });
//         console.log(data.toString());
//     }
// });
// }






