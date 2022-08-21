//自定义Promise

//声明构造函数(不过不保存this指向的话,可以把回调函数换成this)
function Promise(executor) {
    //保存this指针
    var that = this;
    //默认值
    this.PromiseState = "pending";
    this.PromiseResult = undefined;
    this.callBacks = [];
    //定义内部使用resolve和reject
    function resolve(data) {
        //判断Promise状态,不是pending就返回,否则就直接修改状态
        if(that.PromiseState !== "pending") return that
        //修改Promise状态
        that.PromiseState = "fulfilled";
        //修改Promise结果
        that.PromiseResult = data;
        //按顺序调用保存的回调函数
        if(that.callBacks.length !== 0) {
            that.callBacks.forEach(e => {
                e.onResolved(data);
            });
        }
        return that;
    }
    function reject(error) {
        if(that.PromiseState !== "pending") return that
        that.PromiseState = "rejected";
        that.PromiseResult = error;
        if(that.callBacks.length !== 0) {
            that.callBacks.forEach(e => {
                e.onRejected(error);
            });
        }
        return that;
    }
    try {
        //把函数传入回调作为参数
        executor(resolve,reject);
    }catch(error) {
        //收集抛出的错误
        reject(error);
    }
};
//声明then方法
Promise.prototype.then = function(onResolved,onRejected) {
    var that = this;
    if(typeof onResolved !== 'function') {
        onResolved = value => value;
    }
    if(typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        }
    }
    //返回一个Promise对象
   return new Promise((resolve,reject) => {
        function reuse(callBack) {
            try{
                //调用成功回调,把Promise结果传入,并且保存返回值
                    var result = callBack(that.PromiseResult);
                //如果抛出异常
              }catch(error) {
               //把返回的Promise对象变为失败,并把异常传入
                   reject(error);
              }
               //判断返回值是否是Promise对象
               if(result instanceof Promise) {
                   //是则根据返回的Promise对象的状态递归
                    result.then(valve => {
                       //如果返回的Promise对象状态是成功,则调用resolve把返回对象的状态和结果同步
                       resolve(valve);
                    },reason => {
                       //如果返回的Promise对象状态是成功,则调用reject把返回对象的状态和结果同步
                       reject(reason);
                    });
               }else {
                   //如果返回值不是Promise对象,就返回一个成功的对象,并且值为回调的返回值
                   resolve(result);
               }
        };
     //判断当前Promise状态是否成功
     if(this.PromiseState === "fulfilled") {
        //使用延时器变成异步任务
        setTimeout(() => {
            reuse(onResolved);
        }); 
    };
    //判断当前Promise是否失败状态
    if(this.PromiseState === "rejected") {
        setTimeout(() => {
            reuse(onRejected);
        }); 
    };
    //判断没有改变时(处理异步调用)
    if(this.PromiseState === "pending") {
        //将回调函数保存起来,等到状态改变时再调用
        this.callBacks.push(
            {
                onResolved:function() {
                    setTimeout(() => {
                        reuse(onResolved);
                    }); 
                },
                onRejected:function() {
                    setTimeout(() => {
                        reuse(onRejected);
                    }); 
                }
            }
        );
    }
   });  
};
Promise.prototype.catch = function(onRejected) {
    return this.then(undefined,onRejected);
};
Promise.resolve = function(value) {
    //返回一个Promise对象
    return new Promise((resolve,reject) => {
        //如果参数是Promise对象,就根据参数的状态和结果返回,否则就直接返回成功的,且结果值为参数
        if(value instanceof Promise) {
            value.then(v => {
                resolve(v);
            },reason => {
                reject(reason);
            });
        }else {
            resolve(value);
        }
    });
};
Promise.reject = function(reason) {
    //返回一个Promise对象
    return new Promise((undefined,reject) => {
        //无论参数是Promise对象还是其他的值,一律返回失败的对象,且值为参数
        reject(reason);
    });
};
Promise.all = function(arr) {
    //返回一个Promise对象
    return new Promise((resolve,reject) => {
        //创建数组准备存放成功的Promise对象结果
        var PromiseResult = [];
        //遍历数组
        arr.forEach((item,index) => {
            //判断值是否为Promise对象的实例
            if(item instanceof Promise) {
                item.then(v => {
                    //如果是成功Promise,就将结果根据传入参数位置放入数组中
                    PromiseResult[index] = v;
                },reason => {
                //如果是失败的Promise就直接返回相应的状态和结果
                    reject(reason);
                });
            }else {
                //如果不是Promise对象,就根据结果传入参数位置放入数组中
                PromiseResult[index] = item;
            }
        });
        //如果之前没有出现失败的Promise,就返回一个成功Promise,其结果为参数数组中成功Promise对象的值
        resolve(PromiseResult);
    });
};
Promise.race = function(arr) {
    return new Promise((resolve,reject) => {
        arr.forEach(item => {
            if(item instanceof Promise) {
               item.then(v => {
                resolve(v);
               },reason => {
                reject(reason);
               });
            }else {
               resolve(item);
            }
        });
    })
};






