## 基本实现了 create-react-app 基本功能



创建文件：
>
+ /src
+ + /main.js
+ + /App.jsx
+ + /components/Header.jsx
+ /index.html  提供#app容器
+ /webpack.config.js


安装依赖：
```javascript
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
yarn add react react-dom
yarn add -D babel-loader @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react 
```



===main.js:
```javascript
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('app')).render(<App />);
```


===webpack配置：
```javascript
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
```