# Babel

* Babel

  * WHAT

    一款现代的 JavaScript 和 TypeScript 代码编译器

    * 功能

      1. 语法转换（ES6 以上 -> ES5，JSX -> js）
      2. 通过 polyfill 方式在目标环境中添加缺失的特性（通过 code-js 模块实现）
      3. 源码转换（CommonJS -> js，ts -> js）

  * WHY

    * JS 有编译器，为什么还需要 Babel

      因为 Babel 可以通过语法转换器，让新版的 JavaScript 语言开发的代码在浏览器运行起来

* Babel JS 实战

  * npm init 创建项目

    ``` bash
    mkdir babel-js
    cd babel-js
    mkdir src
    mkdir lib
    npm init
    ```

    填入对应选项

    ``` bash
    package name: (babel-js)
    version: (1.0.0)
    description:
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author: MatchaEggTart
    license: (ISC)
    ```

  * 安装 Bebel
  
    ``` bash
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    ```

  * 解析

    * @babel/core 模块

      Babel 编译工具的核心功能

    * @babel/cli 模块

      一个能够在命令行终端中运行的工具，也叫执行脚手架

    * @babel/preset-env 模块

      插件和预设功能模块，如代码转换功能等，包含但不限于
      @babel/plugin-transform-optional-chaining 链式语法。
      @babel/plugin-transform-arrow-functions ES6 箭头语法转换 ES5
      @babel/plugin-transform-block-scoping let/const 语法转换 var
      @babel/plugin-transform-classes class 语法转换
      @babel/plugin-transform-destructuring 解构对象转换

    * 参数 --save-dev

      表示安装方法为“开发依赖”。就是在项目开发阶段所需要的依赖项，在最终的项目开发版中是不需要的，save-dev 安装的包会记录在 package.json 配置文件的 devDependencies 字段中

        ```json
        "devDependencies": {
          "@babel/cli": "^7.24.7",
          "@babel/core": "^7.24.7",
          "@babel/preset-env": "^7.24.7"
        }
        ```

  * babel.config.json

    * WHAT
      编译工具需要这个配置文件，Babel 7.8 以上就要

    * HOW

      ``` powershell
      cd babel-js
      New-Item babel.config.json -type file
      ```

      * babel.config.json

      ``` json
      {
          // 预置
          "presets": [
              [
                  "@babel/env",
                  {
                      "targets": {
                          "node": "current"
                      },
                      "useBuiltIns": "usage",
                      "corejs": {
                          "version": 3,
                          // TODO：允许使用“提议”阶段特性的polyfill
                          "proposals": true
                      }
                  }
              ]
          ],
          "plugins": [
              // 这是下面装了插件再添加
              "@babel/plugin-transform-arrow-functions"
          ]
      }
      ```

  * 解析

    * presets

      内置许多 plugins，比如 @babel/env、@babel/typescript，这些都是自己本身就带着一堆plugins 的模块

      @vue/babel-preset-app、@babel/preset-react 内置了 @babel/preset-env、@babel/plugin-transform-arrow-functions，presets 就是专门拿来放插件集合的模块的

    * plugins

      放置单个 plugin

  * @babel/plugin-transform-arrow-functions

    * WHAT

      想用 ES6 的箭头语法吗？加这个吧

    * HOW

      ``` bash
      npm install --save-dev @babel/plugin-transform-arrow-functions
      ```

  * 创建 ES6 文件

    * babel-js/src/es62es5.js

      ```js
      /*
      * 使用 ES6 箭头函数
      */
      const fn = () => "Hello, ES6 convert to ES5 code!";

      console.log(fn());
      ```

  * 编译 ES5

    * HOW

      ``` bash
      ./node_modules/.bin/babel src --out-dir lib
      ```

      --out-dir 表示编译的产物放到 lib目录下

  * 查看 ES5 文件

    * src/lib/es62es5.js

      ``` js
      "use strict";

      const fn = function () {
        return "Hello, ES6 convert to ES5 code!";
      };
      console.log(fn());
      ```

* Babel TS 实战

  * npm init 创建项目

    ``` sh
    mkdir babel-ts
    cd babel-ts
    mkdir src
    mkdir lib
    npm init
    ```

  * 安装 babel 模块

    ``` sh
    npm install --save-dev @babel/core @babel/cli @babel/preset-env
    ```

  * babel.config.json

    ``` powershell
    New-Item babel.config.json -type file
    ```

    ``` json
    {
        // 预置
        "presets": [
            [
                "@babel/env",
                {
                    "targets": {
                        "node": "current"
                    },
                    "useBuiltIns": "usage",
                    "corejs": {
                        "version": 3,
                        // TODO：允许使用“提议”阶段特性的polyfill
                        "proposals": true
                    }
                }
            ],
            // typescript必须带上
            "@babel/typescript"
        ],

        "plugins": [
            // 这是下面装了插件再添加
            "@babel/plugin-transform-arrow-functions",
            // 用于转换语法特性“类属性”
            "@babel/plugin-proposal-class-properties",
            // 用于转换语法特性“对象扩展”
            "@babel/plugin-proposal-object-rest-spread"
        ]
    }
    ```

  * babel typescript 模块

    * 安装

      ``` node
      npm install --save-dev @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
      ```

    * pacakge.json

      ``` json
      "devDependencies": {
        "@babel/cli": "^7.24.7",
        "@babel/core": "^7.24.7",
        "@babel/plugin-proposal-class-properties": "^7.18.6",
        "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
        "@babel/preset-env": "^7.24.7",
        "@babel/preset-typescript": "^7.24.7"
      }      
      ```

    * 配置 babel.config.json

      ``` json
      {
          // 预置
          "presets": [
              [
                  "@babel/env",
                  {
                      "targets": {
                          "node": "current"
                      },
                      "useBuiltIns": "usage",
                      "corejs": {
                          "version": 3,
                          // TODO：允许使用“提议”阶段特性的polyfill
                          "proposals": true
                      }
                  }
              ],
              "@babel/typescript",
          ],

          "plugins": [
              // 这是下面装了插件再添加
              "@babel/plugin-transform-arrow-functions",
              // 用于转换语法特性“类属性”
              "@babel/plugin-proposal-class-properties",
              // 用于转换语法特性“对象扩展”
              "@babel/plugin-proposal-object-rest-spread",
          ]
      }
      ```

      "@babel/plugin-proposal-class-properties" 和 "@babel/plugin-proposal-object-rest-spread" 均处于“提议”阶段

  * 创建 tsconfig 配置文件

    ``` bash
    tsc --init
    ```

  * src/add.ts

    ``` ts
    /*
    * 
    */

    const a: number = 1;
    const b: number = 2;

    function add(x: number, y: number) : number {
        return x + y;
    }

    const result: number = add(a, b);

    console.log(a + " + " + b + ' =\t', result);
    ```

  * 打开 package.json，在 script 字段添加通过 Babel 编译工具编译 TypeScript 代码的配置信息

    ``` json

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel src --out-dir lib --extensions \".ts"
    },
    ```

    * 解析

      babel命令指定了源文件目录 src，通过 参数 --out-dir 指定编译后文件目录 lib，--extensions 指定编译后文件后缀为 .ts

      实际等于在终端执行命令

        ``` bash
        .\node_modules\.bin\babel src --out-dir lib --extensions .ts
        ```

  * 编译

    ``` bash
    npm run babel
    ```

    * 解析

      调用了 @babel/cli 模块执行编译

  * 执行代码

    ``` bash
    node .\lib\add.js
    ```
