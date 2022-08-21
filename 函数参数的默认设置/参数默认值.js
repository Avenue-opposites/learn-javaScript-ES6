//ES6 允许给函数参数赋值初始值

//1.形参初始值 具有默认值的参数一般要靠后(潜规则)
function fn(name = "阿修罗",age = 20) {
    console.log(name,age);
};
//fn();//阿修罗 20
//fn("帝释天",18);//帝释天 18
//2.与解构赋值结合使用
function connect({host = "127.0.0.1",username = "abc123",password = "123456",port = 6000} = {}) {
    //设置对象默认参数以及默认参数值
    console.log(host,username,password,port);
};
const OP = {
    host:"localthost",
    username:"我即是道",
    password:"654321",
    port:3000
};
const OP2 = {
    username:"铃鹿御前",
    password:"dayuewan"
}
connect(OP);//localthost 我即是道 654321 3000
connect(OP2);//127.0.0.1 铃鹿御前 dayuewan 6000
connect();//127.0.0.1 abc123 123456 6000
