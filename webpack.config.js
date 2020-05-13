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
        ]
    }
};
