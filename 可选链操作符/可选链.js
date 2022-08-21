function main(config) {
    //x?a:b; 如果x存在就使用a,不存在就使用b 
    // let data = config ? config:{
    //     host:"localhost",
    //     userName:"default",
    //     passWord:"default"
    // };
    //默认使用最后的,没有则依次向前使用
    // let data = config && config.host && config.userName;
    // console.log(data); 
    //依次递进,有则使用
    let data = config?.host;
    console.log(data);
};
const user = {
    host:"https://bilibili.com",
    userName:"admin",
    passWord:"abc123"
}
main(user);