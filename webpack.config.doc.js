const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        index: './example.tsx'//入口文件
    },
    output: {
        //输出
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        ...base.plugins,
        // 使用html-webpack-plugin  https://webpack.docschina.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            title: "DoDoUI-React",
            template: "example.html",
            fileName: "index.html"
        })
    ],
});

