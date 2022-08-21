//Object.is() 判断两个值是否完全相等
let num = Object.is(120,120);
let Nan = Object.is(NaN,NaN);
//console.log(num,Nan,NaN === NaN);//true true false

//Object.assign() 对象的合并 出现相同的属性后面会覆盖前面的,没有的则不会
const obj1 = {
    name:"阿修罗",
    age:20,
    a:1
};
const obj2 = {
    name:"帝释天",
    age:18,
    b:2
};
const obj3 = Object.assign(obj1,obj2);
//console.log(obj3);

//Object.setPrototypeOf() 设置原型对象 
//Object.getPrototypeOf() 获取原型对象

const student = {
    name:"小学生"
};
const Person = {
    name:"人类"
};
Object.setPrototypeOf(student,Person);
//console.log(student);

//Object.keys() 获取对象的键
//Object.values() 获取对象的值

//Object.entries()方法把对象转换成键值对列表(二维数组)
let result1 = Object.entries(obj1);
//可以转换成map键值对
let m = new Map(result1);
//console.log(m.get("name"));

//Object.fromEntries() 方法把键值对列表(二维数组)转换为一个对象。
const arr = [["name","帝释天"],["age",18],["gender","男"]];
const obj5 = Object.fromEntries(arr);
//console.log(obj5);//{ name: '帝释天', age: 18, gender: '男' }


// Object.getOwnPropertyDescriptors() 获取对象属性的描述对象
// const obj4 = Object.create(null,{
//     //设置值
//     name:"大岳丸",
//     //属性特性
//     //是否可写属性
//     writable:true,
//     //是否可删除属性
//     configurable:false,
//     //是否可枚举属性
//     enumerable:false
// });
// let result2 = Object.getOwnPropertyDescriptors(obj4);
//console.log(result2);



