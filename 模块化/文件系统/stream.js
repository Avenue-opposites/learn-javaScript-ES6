/*stream(流)
    -可写流是数据写入目标的抽象
    -可读流是数据读取目标的抽象
    
*/







// {
// const fs = require("fs");
// //流式写入
// //同步和异步写入大文件可能会导致性能较差,任意导致内存溢出,所以使用流式写入
// //创建一个可写流
// let ws = fs.createWriteStream(d);// (path[,options])
// //监听流的打开
// ws.once('open',() => {
//     console.log('流打开了');
// });
// // 监听流的关闭
// ws.once('close',() => {
//     console.log('流关闭了');
// });
// //流写入
// ws.write('招财猫');
// ws.write('破势');
// ws.write('火灵');
// //关闭流
// //ws.close();//是直接关闭流
// ws.end();//会等流传输完关闭
// }

// {
// //可读流
// let rd = fs.createReadStream(d);
// //可写流
// let wd = fs.createWriteStream('hello.txt');
// rd.once('open',() => {
//     console.log('read流打开了');
// });
// rd.once('close',() => {
//     console.log('read流关闭了');
//     wd.end();
// });
// wd.once('open',() => {
//     console.log('write流打开了');
// });
// wd.once('close',() => {
//     console.log('write流关闭了');
// });
// //在可读流中,必须要为可读流绑定一个data事件,它会自动读取数据
// rd.on('data',(data) => {
//     // console.log(data.toString());
//     //写入数据
//     wd.write(data);
// });
// }

//管道流
// let rd = fs.createReadStream(d);
// let wd = fs.createWriteStream('hello.txt');
// rd.once('open',() => {
//     console.log('read流打开了');
// });
// rd.once('close',() => {
//     console.log('read流关闭了');
// });
// wd.once('open',() => {
//     console.log('write流打开了');
// });
// wd.once('close',() => {
//     console.log('write流关闭了');
// });
// //把两个流连接起来
// rd.pipe(wd);