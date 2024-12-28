# Webpack

## Webpack 介绍

* webpack

  * WHAT
    > webpack 是用于 Web 应用程序（基于 JavaScript、TypeScript 等前端语言）的静态模型打包工具。
    >
    > 当 webpack 工具处理 Web 应用程序时， 会首先在内部从一个或多个入口构建一个依赖图（Dependency Graph），然后应用中所需的每一模块组合成一个或多个 Bundle（均为静态资源），用于展示 Web 内容。

* webpack 的核心概念

  * 入口（Entry）

    > 入口起点（entry point）指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。入口的默认值是 ./src/index.js，所以如果你省略了该选项，此配置将会生效。
    >
    > 通过在 webpack configuration 中手动配置属性 entry 可以指定一个或多个不同的入口

  * 出口（Output）

    > 出口终点（Output Point），指示 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist/main.js，其他生成文件均默认放在 ./dist 目录中。所以如果你省略了该选项，此配置将会生效。
    >
    > 通过在 webpack configuration 中手动配置属性 output 可以配置自定义的处理过程

  * Loader

    > 因为在 Webpack 工具只能理解 JavaScript 或 JSON 格式的文件，所以可以通过 Loader 让 webpack 工具能够处理其他类型的文件，并将这些文件转换为有效的模块以供应用程序适用，以及添加到依赖图中

  * 插件（Plugin）

    > 相比于 Loader 用于转换某些类型的模块，插件则可以用于执行范围更广的任务，只需通过方法 require() 加载该插件，并将该插件添加到 webpack configuration 中的参数数组 plugins 中

  * 模式（Mode）

    > 应用开发模式。通过选择 development、poduction 或 none 中的一个，设置 webpack configuration 的 参数 mode。
    >
    > 参数 mode 的默认值为 production

  * 浏览器兼容性（Browser Compatibility）

    > webpack工具支持所有符合 ES5 标准规范的浏览器（不支持 IE8 及以下版本）。webpack 工具 的方法 import() 和 require.ensure() 必须通过 Promise 功能来实现
    >
    > 如果想支持 旧版本浏览器，则在使用这些表达式之前加载 polyfill

  * 环境（Environment）

    > webpack 5 版本运行于 Node.js 10.13.0 以上版本

* Node

  * import
  
  * path

    * WHAT

      node 的一个模块，用于处理文件和目录的路径的工具，使用前要引入模块

    * HOW

      使用 path 模块
      `const paht = require("path")`

  * path.join()

    * WHAT

      用于链接路径，并且会自动转换当前系统路径的分隔符"/"或"\"

  * path.resolve()

    * WHAT

      > 也是用于链接路径，但却和 path.join() 方法却很多不同，而且 path.resolve() 方法本身就自带一个to的绝对路径参数，也会自动转换分隔符，在某些场景用起来也方便很多
      >
      > path.resolve(__dirname, "xxx") =>
      > 实际上就是将 __dirname + "/" + "xxx"__ ，返回一个绝对路径

  * __dirname

    * WHAT

      > node 的全局变量
      >
      > __dirname 是指获取当前文件在当前项目中的准确路径

    * HOW

      一般结合 node 内置库 path.resolve() 来获取绝对路径

    * ATTENTION

      不能使用 . 来代替，"." 不是绝对路径，是相对路径，只会定位到项目配置文件的位置

  * __filename

    * WHAT

      __filename 获取当前文件的完整路径和文件名称

    * HOW

      一般直接使用，不需要 path.resolve()

## 通过 webpack 工具构建 JavaScript 项目(书上)

* HOW

  1. 创建项目

      ``` sh
      mkdir webpack-js
      cd webpack-js
      mkdir src
      mkdir dist
      npm init
      ```

      ``` bash
      mkdir -p webpack-js/src/ webpack-js/dist
      touch webpack-js/webpack.config.js
      touch webpack-js/src/index.js webpack-js/dist/index.html
      cd webpack-js                           
      npm init                                
      ```

  2. 安装 webpack 工具所需的 webpack-cli 命令行工具（webpack工具自身的命令行工具）和 webpack 工具的核心模块

      ``` sh
      npm install --save-dev webpack webpack-cli
      ```

  3. webpack-js/src/index.js

      ``` js
      // TODO: define variable
      var s = "Hello, this is Webpack App.";

      // TODO: print
      console.log(s);

      // document operation
      document.getElementsByTagName('p')[0].innerText = s;
      ```

  4. webpack-js/dist/index.html

      ``` html
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <title>Webpack Web App</title>
        </head>
        <body>

          <h3>Webpack Web App</h3>

          <p></p>

        </body>

        <script type="text/javascript" src="bundle.js"></script>
      </html>
      ```

  5. 创建 webpack.config.js 配置文件，通过 module.export 导出一组配置信息，属性 entry 中定义了应用入口（'./src/index.js'），属性 output 中定义了应用出口（'bundle.js'）

      ``` js
      // TODO: 引入 node 的 path 模块
      const path = require("path");
      // import path from "node/path";
      // TODO: module exports
      module.exports = {
        // 定义应用入口
        /* 
         * 等于 entry: "./src/index.js"
         * 等于 entry: __dirname + "/src/index.js",
         */
        entry: path.resolve(__dirname, "src/index.js"),

        mode: "development",
        // 定义应用出口
        output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
        }
      }
      ```

  6. 将 webpack 配置接入项目的 package.json 配置文件的 scripts 字段

      ``` json
      // 实际项目千万千万别加注释
      {
        "name": "webpack-js",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          // 定义使用 webpack 工具
          "build": "webpack"
        },
        "author": "MatchaEggTart",
        "license": "ISC",
        "description": "",
        "devDependencies": {
          "webpack": "^5.93.0",
          "webpack-cli": "^5.1.4"
        }
      }
      ```
  
  7. 执行指令

      ``` sh
      npm run build
      ```

  8. 运行项目

      ``` bash
      edge dist/index.html
      ```

## 通过 webpack 工具构建 JavaScript 项目(自己玩)

* HOW

  1. 创建项目

      ``` sh
      mkdir webpack-js-2
      cd webpack-js-2
      mkdir src
      mkdir dist
      npm init
      ```

      ``` bash
      mkdir -p webpack-js-2/src webpack-js-2/dist
      touch webpack-js-2/webpack.config.js
      touch webpack-js-2/src/index.js webpack-js-2/src/index.html
      cd webpack-js-2
      npm init
      ```

  2. 安装 webpack 工具所需的 webpack-cli 命令行工具（webpack工具自身的命令行工具）和 webpack 工具的核心模块，copy-webpack-plugin 是将 html 复制到 dist 的插件

      ``` sh
      npm install --save-dev webpack webpack-cli copy-webpack-plugin clean-webpack-plugin
      ```

  3. webpack-js-2/src/index.js

      ``` js
      // TODO: define variable
      var s = "Hello, this is Webpack App 2.";

      // TODO: print
      console.log(s);

      // document operation
      document.getElementsByTagName('p')[0].innerText = s;
      ```

  4. webpack-js-2/src/index.html

      ``` html
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Webpack Web App 2</title>
      </head>

      <body>

        <h3>Webpack Web App 2</h3>

        <p></p>

      </body>

      <script type="text/javascript" src="bundle.js"></script>

      </html>
      ```

  5. 创建 webpack.config.js 配置文件，通过 module.export 导出一组配置信息，属性 entry 中定义了应用入口（'./src/index.js'），属性 output 中定义了应用出口（'bundle.js'）

      ``` js
      // TODO: define const path
      const path = require("path");
      // TODO: copy the html file to dist folder
      const CopyWebpackPlugin = require("copy-webpack-plugin");
      // TODO: precisely delete files in output folder
      const { CleanWebpackPlugin } = require("clean-webpack-plugin");


      // TODO: module exports
      module.exports = {
        // 定义应用入口
        entry: path.resolve(__dirname, "src/index.js"),
        mode: "development",
        // 定义应用出口
        output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist")
          // clean 被 CleanWebpackPlugin 代替
          // clean: true
        },
        plugins: [
          // TODO:CopyWebpackPlugin
          // plugins 的指定路径跟随 output 的路径
          new CleanWebpackPlugin({
            // */** 删除文件夹 **/* 删除文件 !代表保留文件
            // cleanOnceBeforeBuildPatterns:["*/**", "**/*", "!保留的文件.js"],
            cleanOnceBeforeBuildPatterns: ["*", "*/*", "!保留的文件.js"]
          }),
          new CopyWebpackPlugin({
            patterns: [
        {
          // from: "src/index.html",
          from: path.resolve(__dirname, "src/index.html"),
          // plugins 的指定路径跟随 output 的路径
          to: "index.html"
        }
            ]
          })
        ]
      }
      ```

  6. 将 webpack 配置接入项目的 package.json 配置文件的 scripts 字段

      ``` json
      {
        "name": "webpack-js-2",
        "version": "1.0.0",
        "main": "webpack.config.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
           // 定义适用 webpack 工具
          "build": "webpack"
        },
        "author": "MatchaEggTart",
        "license": "ISC",
        "description": "",
        "devDependencies": {
          "clean-webpack-plugin": "^4.0.0",
          "copy-webpack-plugin": "^12.0.2",
          "webpack": "^5.97.1",
          "webpack-cli": "^5.1.4"
        }
      }
      ```

  7. 创建测试文件跟文件夹，给 clean-webpack-plugin 使用

      ``` sh
      touch dist/"保留的文件.js" && touch dist/testCleanWebpackPlugin.js && mkdir -p dist/Test && touch dist/Test/testCleanWebpackPlugin.js
      ```

  8. 执行指令

      ``` sh
      npm run build
      tree dist
      ```

  9. 运行项目

      ``` bash
      edge dist/index.html
      ```

## 开发实战：通过 webpack 工具构建 TypeScript 项目

* HOW

  1. 创建项目

      ``` sh
      mkdir webpack-ts
      cd webpack-ts
      mkdir src
      mkdir dist
      npm init
      ```

      ``` bash
      mkdir webpack-ts                                       
      mkdir -p webpack-ts/src webpack-ts/dist                
      touch webpack-ts/webpack.config.js                     
      touch webpack-ts/src/index.ts webpack-ts/src/index.html
      cd webpack-ts
      npm init
      tree -L 2 .
      ```

  2. 安装 webpack 模块

      ``` sh
      npm install --save-dev webpack webpack-cli copy-webpack-plugin
      ```

  3. 安装 typescript 模块

      ``` sh
      npm install --save-dev typescript ts-loader
      ```

  4. 创建 tsconfig.json 文件

      ``` sh
      tsc --init
      ```

  5. src/index.html

      ``` html
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Webpack Web App</title>
      </head>

      <body>

        <h3>Webpack Web App</h3>

        <p></p>

      </body>

      <script type="text/javascript" src="bundle-ts.js"></script>

      </html>
      ```

  6. src/index.ts

      ``` ts
      // TODO: define variable
      var s: string = "Hello, this is Webpack app (by TypeScript).";

      // TODE: print
      console.log(s);

      // document operation
      document.getElementsByTagName('p')[0].innerText = s.toString();
      ```

  7. 创建 webpack.config.js 文件

      ``` js
      // TODO: define const path
      const path = require('path');
      const CopyWebpackPlugin = require('copy-webpack-plugin');



      // TODO: module exports
      module.exports = {
        // 定义应用入口
        entry: './src/index.ts',
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
          filename: 'bundle-ts.js',
          path: path.resolve(__dirname, 'dist'),
          clean: true
        },
        // CopyWebpackPlugin
        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              { from: 'src/index.html', to: 'index.html' },
            ],
          }),
        ],
      } 
      ```

  8. 配置 package.json

      ``` json
      {
        "name": "webpack-ts",
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack"
        },
        "author": "MatchaEggTart",
        "license": "ISC",
        "description": "",
        "devDependencies": {
          "copy-webpack-plugin": "^12.0.2",
          "ts-loader": "^9.5.1",
          "typescript": "^5.5.4",
          "webpack": "^5.94.0",
          "webpack-cli": "^5.1.4"
        }
      }
      ```

  9. 运行

      ``` sh
      npm run build
      ```
