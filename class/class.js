//类表达式
//const Food = class {} 或 const Food = calss Food {} 
//类声明
class Person {
    constructor (name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    interest() {
        console.log(`I am ${this.name}。`);
    }
    static cao() {
        return '我草';
    };
}

//extends 可以创建子类
class Yys extends Person {
    constructor (name,age,sex,rade) {
        //必须使用super()才可以使用继承
        super(name,age,sex);
        this.rade = rade;
        //非静态方法中，不能直接使用 this 关键字来访问静态方法。而是要用类名来调用：
        this.staticMethod = Person.cao() + 'method';
    }
    //通过static关键字创建静态属性或方法 它只能被类本身以及子类使用,不会被实例继承
    static company = 'WY';
    static tnm() {
        //并且子类的可以调用父类的static
        return super.cao() + '666';
    }
}
let zcm = new Yys('招财猫',18,'man',60);
console.log(Yys.tnm());//我草666
//console.log(Person.prototype.__proto__);// Object.prototype
