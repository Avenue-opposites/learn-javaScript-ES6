//数组去重
// const arr = [1,1,2,2,3,3];
// //把数组转换成set,因为它会自动去重,但是返回值是一个类数组,原型是object,并不能使用数组的push...等方法
// let s = new Set(arr);
// //所以可以使用扩展运算符自动转换成数组
// let result = [...s];
// //这时就可以使用数组的方法了
// result.push(4);
// console.log(result);

//获取两个数组的交集
// const arr = [3,4,5,6,4,5]
// const arr1 = [1,2,3,4,5,6,5,6];
// //把两个数组转换成集合去重
// let s1 = new Set(arr);
// //把其中一个转成数组
// let s2 = [...new Set(arr1)];
// //使用数组的过滤器,检查数组的值是否在集合中也有,如果有就返回true,这样过滤器就会自动创建一个数组并添加进去
// let all = s2.filter(value => s1.has(value));
// console.log(all);[ 3, 4, 5, 6 ]

// 把这个封装成一个函数
// function getJiao(arr1,arr2) {
//     return [...new Set(arr1)].filter(value => new Set(arr2).has(value));
// };
// console.log(getJiao(arr,arr1));// [ 3, 4, 5, 6 ]

// //获取并集
// const arr = [3,4,5,6,10]
// const arr1 = [1,2,3,4,5,6];
// //合并数组
// const allarr = [...arr,...arr1];
// //集合去重,扩展符转成数组,然后排序
// let result = [...new Set(allarr)].sort((a,b) => a - b);
// //console.log(result);

// //封装
// function getBing(arr1,arr2) {
//     return [...new Set([...arr1,...arr2])].sort((a,b) => a -b);
//  }
//  //console.log(getBing([123,456,12,56],[12,34,56]));

 //获取补集
const a = [4,5,6,3,2,1,1,2,3,12,13];
const b = [1,2,3,1,2,3,10,11];
// //数组去重
// let sa = new Set(a);
// let sb = new Set(b);
// //数组和并成全集,并去重,然后再转成数组
// let all = [...new Set([...a,...b])];
// //全集使用过滤器,检查自身不在集合中的元素,放入数组
// let result1 = all.filter(vlaue => !sa.has(vlaue));
// let result2 = all.filter(vlaue => !sb.has(vlaue));
// //然后合并数组,进行排序
// let finishResult = [...result1,...result2].sort((a,b) => a - b);
// console.log(finishResult);

//封装
// function getbu(arr1,arr2,sort = true) {
//     let s1 = new Set(arr1);
//     let s2 = new Set(arr2);
//     let allarr = [...new Set([...arr1,...arr2])];
//     let result1 = allarr.filter(value => !s1.has(value));
//     let result2 = allarr.filter(value => !s2.has(value));
//     if(sort) {
//         return [...result1,...result2].sort((a,b) => a - b);
//     }else {
//         return [...result1,...result2].sort((a,b) => b - a);
//     }

//     }
// console.log(getbu(a,b));




