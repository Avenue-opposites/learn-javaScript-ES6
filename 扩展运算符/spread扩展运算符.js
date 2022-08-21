// ...运算符能将数组转换成逗号分隔的参数序列

//声明一个数组
const arr = [1,2,3,4,5,6];
//声明一个函数
function fn() {
    //打印实参
    console.log(arguments);
};
fn(arr);//Arguments] { '0': [ 1, 2, 3, 4, 5, 6 ] }
//相当于 fn(1,2,3,4,5,6);
fn(...arr);

//ES9 扩展符可以展开对象了
const obj = {
    name:"阿修罗",
    age:20,
    gender:"man",
    a:1
};
const obj1 = {
    name:"帝释天",
    age:18,
    gender:"man",
    b:2
}
//还可以合并对象
console.log({...obj,...obj1});
