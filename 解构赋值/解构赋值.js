//按照一定的模式对对象和数组提取值,为变量赋值叫解构赋值
//数组的解构
const F4 = ['孙悟空','唐僧','猪八戒','沙和尚'];
let [孙悟空,唐僧,猪八戒,沙和尚] = F4;//相当于以下代码

// let 孙悟空 = F4[0];
// let 唐僧 = F4[1];
// let 猪八戒 = F4[2];
// let 沙和尚 = F4[3];

//console.log(孙悟空,唐僧,猪八戒,沙和尚);//孙悟空 唐僧 猪八戒 沙和尚

//对象的解构
const OBJ = {
    name:'阿修罗',
    age:18,
    skip:function() {
        console.log("skip one skip!");
    }
}
//let {name,age,skip} = OBJ;//相当于以下代码 但是变量名必须和属性以及方法名一致

// let name = OBJ.name;
// let age = OBJ.age;
// let skip = OBJ.skip;

// console.log(name,age,skip);//阿修罗 18 [Function: skip]
// skip();//skip one skip!

//合并对象
const a = {name:"阿修罗",age:20,a:1};
const b = {name:"帝释天",age:18,b:0};
const obj = {...a,...b};


