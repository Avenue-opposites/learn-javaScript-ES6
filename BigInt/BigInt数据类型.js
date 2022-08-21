//ES11 引入了BigInt(大整型)数据类型

//创建BigInt
let b = 100n;//在数字还没加n
let B = BigInt(1);//或者使用BigInt函数传参
// console.log(b,typeof b);//100n bigint
// console.log(B,typeof B);//1n bigint

//大数值运算
let max = Number.MAX_SAFE_INTEGER;
// console.log(max);//9007199254740991
// console.log(max+1);//9007199254740992
// console.log(max+2);//9007199254740992 //数值不正确
//使用BigInt解决
let bigIntMax = BigInt(max);
let result = bigIntMax + BigInt(2);
let str = result.toString();
//console.log(result);//9007199254740993n
//console.log(str);//9007199254740993 string类型

function BinIntAdd(a,b) {
    return (BigInt(a) + BigInt(b)).toString();
};
console.log(BinIntAdd(1111111111111111,1));//1111111111111112