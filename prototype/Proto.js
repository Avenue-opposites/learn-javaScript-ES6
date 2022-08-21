function Person(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};
Person.prototype.introduce = function() {
    console.log(`I am ${this.name},is ${this.age} year old!`);
}
function Teacher(name,age,sex,subject) {
    Person.call(this,name,age,sex);
    this.subject = subject;
}
let eng = new Teacher('招财猫','30','man','English');

//let obj = Object.create(Teacher);//以参数为原型创建一个实例


// {
//     // const p = new Person('p',18);
//     // const n = new Person('n',19);
//     // console.log(Person.prototype);
//     // console.log(Person.prototype.__proto__);//Object.prototype
    
//     //p.__proto__ === Person.prototype === {}
//     //p.__proto__.proto__ === Person.prototype.__proto__ === Object.prototype
// }

//关于原型链
//会从自身追寻到最后一个原型对象
