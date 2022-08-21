//异步编程
// 1s后控制台输出 "阿修罗",2s后输出 "帝释天", 3s后输出 "大岳丸"
// function * gen(arr = [1,2,3]) {
//     //设置索引
//     let i = 0;
//     yield one(arr[i]);
//     i++;
//     yield two(arr[i]);
//     i++
//     yield three(arr[i]);
// };
// let iterator = gen(["阿修罗","帝释天","大岳丸"]);
// iterator.next();
// function one(data) {
//     setTimeout(() => {
//         console.log(data);
//         //自动调用next,形成链式调用
//         iterator.next();    
//     },1000);
// };
// function two(data) {
//     setTimeout(() => {
//         console.log(data);
//         iterator.next();
//     },2000);
// };
// function three(data) {
//     setTimeout(() => {
//         console.log(data);
//         iterator.next();
//     },2000);
// };

//模拟获取 用户数据 订单数据 商品数据
//创建生成器
function * gen() {
    let userData =  yield getUsers();
    console.log(userData);
    let order = yield getOrder();
    console.log(order);
    let commodity = yield getCommodity();
    console.log(commodity);
};
let stage = gen();
stage.next();
function getUsers() {
    //必须使用异步
    setTimeout(() => {
        let data = "用户数据";
        stage.next(data);
    },1000);
};
function getOrder() {
    setTimeout(() => {
        let data = "订单数据";
        stage.next(data);
    },1000);
};
function getCommodity() {
    setTimeout(() => {
        let data = "商品数据";
        stage.next(data);
    },1000);
}


// const obj = {
//     userName:"不知火",
//     password:"bzh123456",
//     phoneNumber:10086,
//     orderForm:{
//         book:{
//             name:"玄浑道章",
//             price:30
//         },
//         telephone:{
//             name:"Apple",
//             price:6666
//         }
//     }
// };
// function getUsers() {
//     setTimeout(() => {
//         let user = obj;
//         let userMessage = {userName:user.userName,phoneNumber:user.phoneNumber};
//         console.log(userMessage);
//         stage.next(user);
//     },1000);
// };
// function getOrder(data) {
//     setTimeout(() => {
//         let order = data.orderForm;
//         let orders = [data.orderForm.book.name,data.orderForm.telephone.name];
//         console.log(orders);
//         stage.next(order);
//     },1000);
// };
// function getCommodity(data) {
//     setTimeout(() => {
//         let commodityData = data;
//         console.log(commodityData);
//         stage.next(commodityData);
//     },1000);
// };

