/*
    封装一个函数 mineReadFile 读取文件内容
    参数：Path 文件路径
    返回 Promise对象
*/
function mineReadFile(path) {
    //返回Promise对象
    return new Promise((resolve,reject) => {
        //引入fs模块,读取文件路径
        require('fs').readFile(path,(error,data) => {
            if(error) reject(error)
            resolve(data)
        })
    });
}
mineReadFile('resource/Content.txt').then(value => {
    console.log(value.toString());
},reason => {
    console.log(reason);
})