//ES6 允许在对象中直接写入变量和函数,作为对象的属性和方法
//这样书写更简洁
let name = '阿修罗';
let age = 20;
let skip = function() {
    console.log("skip one skip!");
}

const OBJ = {
    name,
    age,
    skip,
    //新的方法声明方式
    die() {
        console.log("I die!");
    }
}
console.log(OBJ);//{ name: '阿修罗', age: 20, skip: [Function: skip], die: [Function: die] }
