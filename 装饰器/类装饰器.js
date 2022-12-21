/* 
    使用类装饰器必须下载
    "@babel/core": "^7.14.6",
    "@babel/node": "^7.14.7",
    "@babel/plugin-proposal-decorators": "^7.14.5",
    "@babel/preset-env": "^7.14.7"
*/

@log("类装饰", 贾嘉佳, 20)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    sayHello() {
        console.log(`Hello,my name is ${this.name}.`);
    };
};

//错误的方式
// const log = function(logger) {
//     return (message,...args) => {
//         console.log(message);
//         console.log(`Logger at ${new Date()}`);
//         return logger.apply(this,args);
//     };
// };
const p = new Person("贾嘉佳", 20);

function log(Class) {
    return (message, ...args) => {
        console.log(message);
        console.log(`Logger at ${new Date()}`);
        return new Class(...args);
    };
};



