//getter(访问器)和setter(设置器)
class Phone {
    constructor(brand,version,price) {
        this.brand = brand;
        this.version = version;
        this.price = price;
    }
    //访问器：每次访问属性时会自动调用该属性对应的访问器,访问器的返回结果就是该属性的值
    //不能在访问器中使用this.当前访问的属性,不然会自动递归到执行栈爆满
    // get brand() {
    //     console.log("brand属性被读取啦...");
        
    // }
    // //设置器：必须有一个形参,这个参数接收设置的值
    // set brand(value) {
    //     console.log(value);
    // }
}
let Meizu = new Phone("魅族","16th plus",1999);
//读取实例
// console.log(Meizu);

//调用访问器
// Meizu.brand
// Meizu.version //并不会触发brand的访问器
// console.log(Meizu.brand);

//调用设置器
// Meizu.brand = "小米";


let expr = 'foo';
//可以使用变量和表达式
const obj = {
  get [expr]() { return 'bar'; }
};
console.log(obj.foo);//bar