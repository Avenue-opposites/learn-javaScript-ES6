// import {helloWorld as m1} from "./hello.js";
const btn = document.getElementById("btn");
btn.onclick = function() {
    // m1();
    //动态获取 返回一个Promise对象
    const model = import("./hello.js");
    model.then(module => {
        module.helloWorld();
    });
    model.catch(reason => {
        console.error(reason);
    });
};