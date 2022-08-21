//ES6 创造了for...of循环,这个循环就是根据iterator(迭代器)来进行的
//原生具备iterator接口的数据如下：
    // 1.Array
    // 2.Arguments
    // 3.set
    // 4.Map
    // 5.String
    // 6.TypeArray
    // 7.Nodelist
//迭代器工作原理
        //1.创建一个指针对象,指向当前数据结构的起始位置
        //2.调用对象的next方法,指针自动指向当前数据结构的第一个成员,
        //3.接下来一直调用next方法,指针移动到向下一个成员,直到指针指向当前数据结构的最后一个成员
        //每调用一个next方法,就会返回一个对象,这个对象包含一个value属性和done属性
//默认情况下for...of获取键值(Value)和值,for...in获取键名(Key)和索引(Index)
const arr = [1,2,3,4];
arr[Symbol.iterator] = function() {
    let i = 0;//定义索引
    return {
        next:() => {
            if(i < this.length) {
                const result = {value:this[i] * 10,done:false};
                i++;
                return result;
            }else {
                return {value:undefined,done:true};
            }
        }
    };
};
for(let i of arr) {
    console.log(i);
};


//定义一个函数获取对象键名
// function getkeys(obj = {}) {
//     const arr = [];
//     for(let i in obj) {
//         arr.push(i);   
//     };
//     return arr;
// }

const obj = {
    name:"帝释天",
    age:18,
    gender:true,
    like:["魅妖","雪幽魂","返魂香","蚌精","火灵"],
    //获取键名函数
    getkeys(obj = this) {
        const arr = [];
            for(let i in obj) {
                arr.push(i);   
            };
            return arr;
    },
    //创建迭代器获取键值
    [Symbol.iterator]() {
        //声明索引
        let i = 0;
        //保存键名数组
        let keys = this.getkeys();
        return {
            next:() => {
                if(i < keys.length) {
                    const result = {value:this[keys[i]],index:keys.length,done:false};
                    i++;
                    return result;
                }else {
                    return {value:undefined,done:true};
                };
            },
        };
    },
};

// for(let i of obj) {
//     console.log(i);
// };
