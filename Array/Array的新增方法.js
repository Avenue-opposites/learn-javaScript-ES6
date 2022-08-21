//flat()方法 可以将高维数组转成低维数组 可以传入deep参数 默认向下展开一层,也就是降低一维
let arr = [1,2,3,[,4,5,6,[7,8,9]]];
const result1 = arr.flat();
const result2 = arr.flat(2);
//console.log(result1);//[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
//console.log(result2);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 
//map()方法 接收一个callback,对数组中每个元素(但是不能出现引用数据类型)进行处理,返回一个数组
let arr1 = [1,2,3,4,5];
const result4 = arr1.map(vaule => [vaule * 10]);
console.log(result4);//[ [ 10 ], [ 20 ], [ 30 ], [ 40 ], [ 50 ] ]
//flatMap()方法 接收一个callback,对数组中每个元素(但是不能出现引用数据类型)进行处理,但是默认deep默认为1,
//返回一个数组
const result5 = arr1.flatMap(value => [value * 10]);
console.log(result5);[ 10, 20, 30, 40, 50 ]