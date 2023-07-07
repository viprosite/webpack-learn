const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '...']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', {
                                "runtime": "automatic"   // 免去了每个react组件都需要手动引入React
                            }]
                        ],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        static: './dist',
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
        })
    ]
}