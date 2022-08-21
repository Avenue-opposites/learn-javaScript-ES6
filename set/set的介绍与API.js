//ES6 引入了新的数据结构set(集合)Set 它类似于数组,但是值是唯一的

//创建一个set
let s = new Set();
//console.log(s);//Set(0) {}

//可以传入一个可迭代数据
let s1 = new Set([1,2,3,4,5,2,4,3]);//set会自动去重
//console.log(s1);//Set(5) { 1, 2, 3, 4, 5 }
//size属性是集合的元素个数
//console.log(s1.size);
//add方法添加新的元素
s1.add(6);
//delete方法删除元素
s1.delete(1);
//has方法检查元素是否存在
let exist = s1.has(2);
console.log(s1,exist);// Set(5) { 2, 3, 4, 5, 6 } true
//遍历集合
for(let v of s1) {
    console.log(v);
}
//clear方法清空集合
s1.clear();
console.log(s1);//Set(0) {}

