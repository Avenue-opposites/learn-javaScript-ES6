//ES6 引入class(类),作为对象的模板,其实class的绝大部分功能ES5就可以实现,只不过更繁琐
//class的写法只不过是让对象的原型写法更加清晰,更像面向对象的语法
//构造函数首字母大写

//ES5的模板写法 
function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gander = gender;
};
Person.prototype.interestion = function() {
    console.log("My name is "+ this.name);
}
//定义静态属性和方法 
Person.names = "Person";
Person.liveing = function() {
    console.log("我是活的！");
}
//p是Person的实例
let p = new Person("阿修罗",20,"man");
//p.interestion();//My name is 阿修罗
//console.log(p.names,p.liveing());//p.name is defined, p.liveing is not a function
//console.log(Person.names);//Person
//Person.liveing();//我是活的！



//ES6 class写法
class Phone {
    //构造方法
    constructor(brand,version,price) {
        this.brand = brand;
        this.version = version;
        this.price = price;
    }
    //方法必须使用ES6的简化语法,不能使用ES5对象的方法的写法
    call(recipient,phoneNumber) {
        console.log(`正在拨打${phoneNumber} ${recipient}的电话.....`);
    }
    //在属性和方法前加上static 就是静态属性和方法
    //关于静态属性:构造器和子类本身可以使用,但是实例不能使用
    static Phone = "手机";
    static development() {
        console.log(`开发人员调试中...`);
    }
};
let iphone = new Phone("Apple","13 Pro Max",6799);

//console.log(Aphone);
//拨打电话
//Aphone.call("特朗普",18279636436);

//使用静态属性和方法
//console.log(Phone.name);//Phone
//Phone.development();//开发人员调试中...
