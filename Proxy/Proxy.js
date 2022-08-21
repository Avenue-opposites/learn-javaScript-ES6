//ES6引入的Proxy,Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义
//Reflect对象可以让对对象的操作更加清晰
const target = {
    name:"阿修罗",
    age:20,
    hobby:["从天而降"],
    sayIntroduce() {
        console.log(`hello,I'm ${this.name}.`);
    },
    _job:{
        type:"前端工程师",
        salay:"50k"
    }
};

//处理器对象
const handler = {
    //读取拦截,可以被继承
    get(target,key,context) {
        if(key[0] === "_") throw `无效的属性 ${key}`;
        if(target.hasOwnProperty(key)) {
            return Reflect.get(target,key);
        }else {
            console.warn(`不能读取不存在的属性 ${key}`);
        }
    },
    //赋值拦截
    set(target,key,newValue,context) {
        if(key[0] === "_") throw `无效的属性 ${key}`;
        //设置不能添加新的属性
        if(target.hasOwnProperty(key)) {
            return Reflect.set(target,key,newValue);
        }else {
            console.warn(`不能添加额外的属性 ${key}`);
        }
    },
    //拦截函数对象的调用,call以及apply
    apply(target,context,args) {
        // console.log(target,context,args);
        //对代理函数的返回值进行一些操作
        return Reflect.apply(target,context,args) * 2;
    },
    has(target,key) {
        if(key[0] === "_") return false;
        return Reflect.has(target,key); 
    },
    construct(target,args,newTarget) {
        // console.log(newTarget);
        return Reflect.construct(target,args,newTarget);
    },
    deleteProperty(target,key) {
        if(key[0] === "_") throw `不能删除无效的属性 ${key}`;
        return Reflect.deleteProperty(target,key);
    },
    defineProperty(target,key,descriptor) {
        console.log("descriptor:",descriptor);
        return Reflect.defineProperty(target,key,descriptor);
    },
    getOwnPropertyDescriptor(target,key) {
        if(key[0] === "_") throw `不能获取无效的 ${key} 属性描述`;
        console.log("获取描述对象");
        // return Reflect.getOwnPropertyDescriptor(target.key);
        return Reflect.getOwnPropertyDescriptor(target,key);
    },
    getPrototypeOf(target) {
        console.warn(`正在访问${target}的原型对象...`);
        return Reflect.getPrototypeOf(target);
    },
    isExtensible(target) {
        console.warn(`扩展属性`);
        return Reflect.isExtensible(target);
    },
    ownKeys(target) {
        console.log("遍历对象属性中");
        return Reflect.ownKeys(target).filter(el => !(el[0] === "_"));
    },
    preventExtensions(target) {
        console.log("不可扩展");
        return Reflect.preventExtensions(target);
    },
    setPrototypeOf(target,proto) {
        throw  `不能修改该对象的原型对象`;
        return Reflect.setPrototypeOf(target,proto);
    }
};
const p = new Proxy(target,handler);
console.log("p.name:",p.name);//阿修罗
console.log("p.a:",p.a);//undefined
const person = Object.create(p);
console.log("person.name:",person.name);//阿修罗
console.log("person.hobby:",person.hobby);//["从天而降"],使用的p的get方法

p.name = "帝释天";
// p.a = 1;
console.log(p);
// p._job = [];
p.sayIntroduce();

function add(x,y) {
    return x + y;
};
const p2 = new Proxy(add,handler);
console.log(p2(1,2));
console.log("name" in p);
console.log("_job" in p);

const p3 = new Proxy(function Dog(name,age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log("汪汪汪");
    }
},handler);
const dog = new p3("旺财",5);
console.log(dog.name);
dog.bark();

// delete p.hobby;
// delete p._job;
console.log(p);
// p.name = "李二"
Object.defineProperty(p,"gender",{value:"男"});
console.log(p);

let d = Object.getOwnPropertyDescriptor(p,"name");
console.log(d);

let t = Object.getPrototypeOf(p);
console.log(t);

console.log(Object.isExtensible(p));

console.log(Object.keys(p));

console.log(Object.preventExtensions(p));

// console.log(Object.setPrototypeOf(p,dog));

const proxy = Proxy.revocable(p,handler);
//解除代理
proxy.revoke();
console.log(proxy.proxy);






