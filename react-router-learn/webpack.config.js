const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist'),
        clean: true,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            '@': path.join(__dirname, './src'),
        }
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.scss$/,
                use: 'sass-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        })
    ],
    devServer: {
        static: {
            // publicPath: path.join(__dirname, 'public')
        },
        historyApiFallback: true
    }
}