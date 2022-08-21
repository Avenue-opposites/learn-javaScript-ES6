//ES6 引入了map数据结构,它和对象一样是键值对结构,但是它的键范围不限于字符串,各种类型的值都可以当键,包括对象
//map也实现了iterator接口 可以使用for...of和扩展运算符

//创建一个map 
let m = new Map();

//添加一个键值对
m.set("name","阿修罗");
m.set(123,123);

//获取map键值对数量
let size = m.size;
//console.log(m,size);//Map(2) { 'name' => '阿修罗', 123 => 123 },2

//删除键值对 参数是要删除的那个键名
m.delete(123);
//console.log(m,m.size);//Map(1) { 'name' => '阿修罗' },1

//根据键名获取键值
let result = m.get("name");
//console.log(result);//阿修罗

//清空map
m.clear();
//console.log(m);//Map(0) {}

//遍历map
let m1 = new Map();
m1.set("阿修罗","狂骨");
m1.set("帝释天","魅妖");
m1.set("因幡辉夜姬","共潜");
for(let v of m1) {
    let key = v[0];
    let value = v[1];
    console.log(v,key,value);//每个键值对都是一个数组 
    // [ '阿修罗', '狂骨' ]
    // [ '帝释天', '魅妖' ]
    // [ '因幡辉夜姬', '共潜' ]
}


