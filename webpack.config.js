const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './lib/index.tsx'//入口文件
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        //输出
        path: path.resolve(__dirname, 'dist/lib'),
        library: "dodoui-react",
        libraryTarget: 'umd'
    },
    plugins: [
        // 使用html-webpack-plugin  https://webpack.docschina.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            title: "DoDoUI-React",
            template: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
        ]
    }
};
