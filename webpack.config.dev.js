const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: './example.tsx'//入口文件
    },
    plugins: [
        ...base.plugins,
        // 使用html-webpack-plugin  https://webpack.docschina.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            title: "DoDoUI-React",
            template: "example.html"
        })
    ],
});

