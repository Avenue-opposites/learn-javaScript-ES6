//1.常量声明是必须赋值
//const A;//SyntaxError: Missing initializer in const declaration

//2.常量命名最好用大写(编程规范潜规则)
// const NAME = '帝释天';

//3.常量不能重复声明
// const A = 1;
// const A = 2;//SyntaxError: Identifier 'A' has already been declared

//4.常量不能修改值
// const A = 1;
// A = 2;//TypeError: Assignment to constant variable.

//5.常量拥有块级作用域 
// {
//     const A = 1;
// }
// console.log(A);//ReferenceError: A is not defined

//6.常量的值如果是引用数据类型,修改属性和元素不算对常量的修改,因为常量保存的是它们的内存地址(指针)
// const OBJ = {
//     name:"帝释天",
//     age:20,
//     gender:true
// }
// console.log(OBJ);//{ name: '帝释天', age: 20, gender: true }
// OBJ.name = "阿修罗";
// console.log(OBJ);//{ name: '阿修罗', age: 20, gender: true }

// const ARR = [1,2,3];
// console.log(ARR);//[ 1, 2, 3 ]
// ARR[0] = 4;
// console.log(ARR);//[ 4, 2, 3 ]

