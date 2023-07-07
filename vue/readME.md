## 基本实现 vue create 基本功能
1. 创建vue组件并使用
2. 引用scss语法

> 23-07-07
 + src
 + + /main.js
 + + /App.vue
 + + /index.html
 + + /components/Header.vue
 + webpack.config.js

安装依赖：
```javascript
yarn add vue
yarn add -D vue-loader vue-template-compiler
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
yarn add -D style-loader css-loader node-sass sass-loader
```

main.js:
```javascript
import Vue from 'vue';
import App from './App'
new Vue({
    el: '#app',
    render: h => h(App)
})
```

webpack.config.js:
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');  // !!!

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.vue'],
        // alias: {
        //     vue: 'vue/dist/vue.js',
        // },
    },

    module: {
        rules: [
            {
                test: /.vue$/,
                use: ['vue-loader']
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
        }),
        new VueLoaderPlugin()
    ]
}
```