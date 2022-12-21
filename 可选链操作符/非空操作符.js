//非空操作符:x ?? y,如果x不等于null和undefined,就使用x,否则就使用y
//非空赋值符:x ??= y,如果x不等于null和undefined,就使用x,否则就使用y
let a = 1;
let b = 0;
let c = null;

let resultA = a ?? "default";
let resultB = b ?? "default";
let resultC = c ?? "default";

a ??= "default";
b ??= "default";
c ??= "default";
console.log(resultA,resultB,resultC);
console.log(a,b,c);