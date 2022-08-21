/*buffer(缓冲区)
    - buffer的结构和数组很像
    -数组不可以存储二进制文件,而buffer可以存储二进制文件,但是显示的时候会变成十六进制
    -使用buffer不需要引入模块,直接使用即可
    -buffer中每个元素的范围是00-ff   0-255 转换成二进制刚好是八位
        所以buffer中一个元素占用内存一个字节
    -from() 转换成buffer
    -alloc() 分配buffer内存,但会初始化为0
    -allocUnsafe() 分配buffer内存,但不会初始化
    -toString() 转换成字符串
*/
let str = `阴阳师`;
//将数据保存到buffer中
let buf = Buffer.from(str);
console.log(buf.toString());//可以将数据转成字符串
//console.log(str.length);
//console.log(buf.length);//一个汉字占三个字节
//Buffer所有的构造函数都不推荐使用
//let buf2 = new Buffer(1024);//1KB
let buf2 = Buffer.alloc(10);//分配的空间会清空数据
//可以通过索引来操作buffer元素
buf2[0] = 16;//0x1
buf2[10] = 0xaa;//buffer的大小一旦确定就不可以修改,因为buffer是对底层内存的实际操作
buf2[1] = 556;//2c 转二进制会取后八位
console.log(buf2);
//console.log(buf2[1]);//44 数字在控制台输出会转成十进制
//console.log(buf2.length);
let buf3 = Buffer.allocUnsafe(10);//分配的空间不会清空数据,所以可能会有敏感数据
console.log(buf3);