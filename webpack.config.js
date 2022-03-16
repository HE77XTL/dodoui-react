const path = require('path');

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
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: 9000,
        host: "0.0.0.0",
    },
    plugins: [],
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
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name:'images/[name]-[hash:8].[ext]',//images:图片打包的文件夹；
                    //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
                    //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
                }
            },
        ]
    }
};
