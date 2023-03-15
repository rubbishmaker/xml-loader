const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    //入口 相对路径
    entry: "./src/main.js",
    //输出
    output: {
        //文件的输出绝对路径 __dirname代表当前文件的文件夹目录 path是所有文件的打包
        path: undefined,
        // //这个filename是入口文件打包之后的输出名字和路径
        filename: "js/main.js",
        // //打包前清空
        // clean: true
        //开发模式下没有输出
    },

    //加载器
    module: {
        rules: [
                    {
                        test:/\.xml$/,
                        use:[
                            {loader:'./loaders/xml-loader.js'}
                        ]
                    }
        ]
    },
    //插件
    plugins: [ new HtmlWebpackPlugin({
        //保留结构
        template: path.resolve(__dirname, "./src/index.html")
    })],
    //开启一台服务机器并且热更新
    devServer: {
        host: "localhost",
        port: "3331",
        open: true,
        hot: true //开启hmr
    },
    //模式
    mode: "development",
}