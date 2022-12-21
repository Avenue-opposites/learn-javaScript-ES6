//decorator(装饰器来源于一种设计模式),用于包装,扩展,不改变原来的结果
const multiply = (x,y) => x * y;

//log装饰器
const log = function(logger) {
    return (message = "",...args) => {
        console.log(message);
        const result = logger.apply(this,args);
        console.log("结果是",result);
        console.log(`Logger at ${new Date()}`);
        return result;
    };
};

const logMultiply =  log(multiply);

logMultiply("大家好,我已经过log装饰",6,6);