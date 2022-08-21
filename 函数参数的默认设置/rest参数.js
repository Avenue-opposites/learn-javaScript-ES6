//ES6 引入rest参数 用于实参的获取 用来代替arguments

//ES5获取实参 arguments原型实际上是一个对象
function fn() {
    for(let i in arguments) {
        console.log(arguments[i]);    
    }
};
// fn("阿修罗",20);//"阿修罗",20

//rest(剩余)参数 rest原型是一个数组,可以使用数组的方法
function Rest(...rest) {
    console.log(rest);
};
// Rest("帝释天",18);//[ '帝释天', 18 ]

//rest参数必须是参数列表中的最后一个参数
function fn2(a,b,c,...rest) {
    console.log(a);// 1
    console.log(b);// 2
    console.log(c);// 3
    console.log(rest);// [ 4, 5, 6, 7 ]
};
//fn2(1,2,3,4,5,6,7);

//ES9 rest参数可以在对象的解构赋值中使用
function connect({host,port,...user}) {
    //会将没有在解构赋值中命名的数据全部放在user对象中
    console.log(host,port,user);
};
connect({
    host:"127.0.0.1",
    port:3000,
    userName:"铃彦姬",
    password:"acb123",
    type:"POST"
});

