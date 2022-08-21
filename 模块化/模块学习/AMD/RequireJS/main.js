//IFFI 自动执行匿名函数
(function() {
    //配置
    requirejs.config({
        //基本路径
        // baseUrl:"./",
        //配置路径
        paths:{
            //设置模块路径
            dataService:"./modules/dataService",
            alerter:"./modules/alerter",
            vue:"./libs/vue"
        }
    });
    requirejs(["alerter","vue"],function(alerter,vue) {
        //获取模块的name
        let dataServiceName = alerter.getDependment().getName();
        let alerterName = alerter.getName();
        console.log(dataServiceName);
        console.log(alerterName);
        //vue2配置对象
        //去除生产提示
        vue.config.productionTip = false;
        const appOption = {
            el:"#app",
            data:{
                message:"我是引入的第三方模块vue"
            }
        };
        const app = new vue(appOption);
        
    });
})();