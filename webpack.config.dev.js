const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: './lib/index.tsx'//入口文件
    },
    plugins: [
        // 使用html-webpack-plugin  https://webpack.docschina.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            title: "DoDoUI-React",
            template: "index.html"
        })
    ],
});

