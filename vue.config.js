/*
 * @Author: your name
 * @Date: 2021-09-15 15:26:08
 * @LastEditTime: 2021-12-09 21:12:48
 * @LastEditors: Lone
 * @Description: In User Settings Edit
 * @FilePath: \pro-email\vue.config.js
 */
//vue 官方关于vue.config.js中配置的详细文档： https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
    publicPath: '',

    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        // open: false, //是否自动弹出浏览器页面
        // host: "localhost", 
        // port: '8080', 
        // https: false,   //是否使用https协议
        // hotOnly: true, //是否开启热更新
        proxy: {//配置跨域
            '/lineapi': {
                target: 'http://54.251.224.117:9260/',//填写真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/lineapi': ''//请求的时候使用这个api就可以
                }
            },
            '/login': {
                target: 'http://52.74.188.171:9200/',//填写真实的后台接口
                // ws: true,
                // secure: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/login': ''//请求的时候使用这个api就可以
                }
            },
            // '/api': {
            //     target: 'http://54.251.224.117:9220/',//填写真实的后台接口
            //     // ws: true,
            //     secure: true,
            //     changOrigin: true,//允许跨域
            //     pathRewrite: {
            //         '^/api': ''//请求的时候使用这个api就可以
            //     }
            // },
        }
    },

    //是否开启selint
    lintOnSave: false,

    pluginOptions: {
      cordovaPath: 'src-cordova'
    }
}
