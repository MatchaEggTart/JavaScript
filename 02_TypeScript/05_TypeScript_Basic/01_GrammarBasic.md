# TypeScript 语法基础

## 变量声明、变量作用域与变量提升

* var

  * WHAT

    在 JavaScript 语法规则中，是通过 var 关键字来声明变量的。TypeScript 语法沿用了 JavaScript 的语法规则，同样使用 var 关键字来声明和定义变量的

* TypeScript 变量命名的基本规则

  * WHAT

    > 变量名中可以包含数字和字母
    >
    > 除 "_" 符号和 "$" 符号外，变量名中不能包含其他特殊字符（包括空格）
    >
    > 变量名不能以数字开头

  * HOW

    ```ts
    var [变量名] : [类型] = 值; // 如果未进行变量初始化，则变量名默认为 undefined
    ```

    * 所以 typescript 是强类型的编程语言

    * 如果 TypeSript 使用 JavaScript 方式，则变量的类型是 Any 类型

  * ATTENTION

    > TypeScript 语法还支持通过 var 关键字声明的变量和函数具有变量提升（Hoisting）特性，这点与 JavaScript 语法规则相同。所谓 变量提升，是指函数和变量的声明都会提升到函数的顶部。即，TypeScript 变量可以先使用再声明

## 开发实战：TypeScript 变量类型声明应用

* HOW

  1. 创建项目

      ``` bash
      mkdir gram-rules
      cd gram-rules
      mkdir src
      mkdir dist
      npm init
      ```

  2. 安装模块

      ``` bash
      npm install --save-dev webpack webpack-cli copy-webpack-plugin typescript ts-loader

      tsc --init
      ```

  3. src/variables.ts

      ``` ts
      /**
       * TypeScript - Variable Type
      */

      // TODO: define variable i by js method
      var i;

      console.log("i = " + i);
      console.log("typeof i is '" + typeof i + "'");

      i = "TypeScript";

      console.log("i = " + i);
      console.log("typeof i is '" + typeof i + "'");

      // TODO: define variable s by ts method
      var s : string = "TypeScript";
      console.log("s = " + s);
      console.log("typeof s is '" + typeof s + "'");

      s = 123;
      console.log("s = " + s);
      console.log("typeof s is '" + typeof s + "'");
      ```

  4. 配置 webpack.config.js

      ``` js
      // TODO: define const path
      const path = require('path');
      // const CopyWebpackPlugin = require('copy-webpack-plugin');



      // TODO: module exports
      module.exports = {
        // 定义应用入口
        // entry: './src/variables.ts',
        entry: {
          variables: "./src/variables.ts",
        },
        mode: 'development',
        module: {
          rules: [
            // 加载 ts-loader 插件 处理全部 .ts 格式文件
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            },
          ]
        },
        // 解决
        resolve: {
          extensions: ['.tsx', '.ts', '.js']
        },
        output: {
          // 定义应用出口
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist'),
          clean: true
        },
        /*
        // CopyWebpackPlugin
        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              { from: 'src/index.html', to: 'index.html' },
            ],
          }),
        ],
        */
      } 
      ```

  5. 配置 package.json

      ``` json
      {
        "name": "gram-rules",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack"
        },
        "author": "MatchaEggTart <MatchaEggTart@hotmail.com>",
        "license": "ISC",
        "description": "",
        "devDependencies": {
          "copy-webpack-plugin": "^12.0.2",
          "glob": "^11.0.0",
          "ts-loader": "^9.5.1",
          "typescript": "^5.5.4",
          "webpack": "^5.94.0",
          "webpack-cli": "^5.1.4"
        }
      }
      ```

  6. 运行

      ``` sh
      npm run build
      node ./dist/variables.bundle.js
      ```
