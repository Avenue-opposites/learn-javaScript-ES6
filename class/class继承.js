//ES5的构造函数继承
//创建父类
function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};
Person.prototype.interestion = function() {
    console.log("My name is "+ this.name);
};
//父类添加静态属性
Person.names = "Person";
//创建子类
function student(name,age,gender,grade) {
    //继承父类属性 第一个参数是指定Person的this值,这里的this就是student的实例,
    //后面参数把值传递给Person的形参
    Person.call(this,name,age,gender);//相当于以下注释 
    // this.name = name;
    // this.age = age;
    // this.gender = gender;
    this.grade = grade;
};
//设置子类的原型
student.prototype = new Person;
//设置子类原型的构造者,是谁的原型构造者就是谁
student.prototype.constructor = student;
//设置子类的原型方法
student.prototype.learning = function() {
        console.log("我正在学习中...");
};
let stu = new student("阿修罗",20,"man","一年级");
//console.log(stu);
//stu.learning();//我正在学习中...
//stu.interestion();//My name is 阿修罗
// console.log(student.names);子类访问不了父类静态属性



//class继承
class Phone {
    //私有的属性和方法只能在类的内部才能使用
    #siYou = "我是一个私有属性";
    #siYouAdd(a,b) {
        return a + b;
    };
    constructor(brand,version,price) {
        this.brand = brand;
        this.version = version;
        this.price = price;
    };
    //构造类不能调用实例的方法
    call(recipient,phoneNumber) {
        console.log(`正在拨打${phoneNumber} ${recipient}的电话.....`);
    };
    aaa(a,b) {
        //可以使用动态方法输出和使用私有属性和方法
        console.log(this.#siYou);
        console.log(this.#siYouAdd(a,b));
    };
    static names = "Phone";
    static sayName(name = this.names) {
        return `My name is ${name}`;
    };
};
//继承Phone类 必须使用extends关键字
class SmartPhone extends Phone {
    constructor(brand,version,price,color,size) {
        super(brand,version,price);//相当于 Person.call(this,name,age,gender);
        this.color = color;
        this.size = size;
        //在非静态环境中 不能使用this和super访问父类,必须使用构造器访问
        this.father = Phone.names;
    };
    playGames(game) {
        console.log(`我正在玩${game}.`);
    };
    sayFather() {
        console.log(Phone.names);
    };
    //子类对父类方法进行重写,说白了就是在子类中写一个和父类方法同名的方法,来覆盖父类的这个方法
    //因为子类调用方法会现在自身的原型里查找,如果查找不到就会去原型的原型里查找,也就是父类的原型.
    //具体参考原型链
    call(recipient) {
        console.log(`正在对${recipient}进行视频通话...`);

    };
    static get() {
        //静态环境可以访问父类静态属性和方法
        console.log(this.sayName() === super.sayName());
    };
}
//创建父类实例
let phone = new Phone("诺基亚","1.0.6",199); 
//创建子类实例
let iPhone = new SmartPhone("Apple","12 Pro Max",5000,"bule","6.9inch");
//输出两个实例
//console.log(phone);
//console.log(iPhone);
//调用实例方法
//iPhone.playGames("和平精英");//我正在玩和平精英.
//iPhone.call("马化腾",18279636436);//正在拨打18279636436 马化腾的电话.....
//子类使用父类静态成员
//console.log(SmartPhone.names);
//console.log(SmartPhone.sayName());

//关于子类的原型
//console.log(SmartPhone.prototype);
//console.log(SmartPhone.prototype === Phone);//false
//子类原型的原型就父类的原型
//console.log(SmartPhone.prototype.__proto__ === Phone.prototype);//true

//父类不能使用子类的方法
//Phone.playGames() is not defined

//SmartPhone.get();//true

//console.log(iPhone.father);//Phone


phone.aaa(1,2);
