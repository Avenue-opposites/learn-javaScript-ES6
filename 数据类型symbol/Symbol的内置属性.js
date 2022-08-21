//Symbol.hasInstance用于判断某对象是否为某构造器的实例。
//因此你可以用它自定义 instanceof 操作符在某个类上的行为。

//创建一个类
class Person {
    //这个方法可以操控instanceof运算符的执行方式
    static [Symbol.hasInstance] (instance) {//这个接收instanceof前面的值
        // console.log(instance);
        return true;//返回值决定对Person构造器的执行instanceof运算符的结果
    };
}; 
//console.log({} instanceof Array);//false
//console.log([] instanceof Person);//true

//Symbol.isConcatSpreadable属性控制Array.prototype.concat()方法的参数是否展开其数组元素
const arr = [1,2,3];
const arr1 = ["阿修罗","帝释天"];//数组默认情况下Symbol.isConcatSpreadable为true
const arr2 = ["破势","狂骨","招财猫"];
const arrAll = arr.concat(arr1,arr2);
//console.log(arrAll);// [1,2,3,"阿修罗","帝释天","破势","狂骨","招财猫"]
//console.log(arrAll.length);// 8
arr1[Symbol.isConcatSpreadable] = false;
const arrAll2 = arr.concat(arr1,arr2);
//console.log(arrAll2);// [1,2,3,["阿修罗","帝释天"],"破势","狂骨","招财猫"]
//console.log(arrAll2.length);//7

//对于类数组 (array-like)对象，默认不展开。期望展开其元素用于连接，需要设置为true
var fakeArray = {
  length: 2,
  0: "hello",
  1: "world"
};
const arrlike = arr.concat(fakeArray);
console.log(arrlike);//[ 1, 2, 3, { '0': 'hello', '1': 'world', length: 2 } ]
console.log(arrlike.length);//4
fakeArray[Symbol.isConcatSpreadable] = true;
const arrlike2 = arr.concat(fakeArray);
console.log(arrlike2);//[ 1, 2, 3, 'hello', 'world' ]
console.log(arrlike2.length);//5


//Symbol.description属性返回Symbol的描述信息
let s = Symbol("我是描述信息");
console.log(s.description);//我是描述信息

