# Rollup

## Rollup 介绍

* Rollup

  * WHAT

    * JS 模块打包工具，可将多个小的代码片段编译为完整的应用

    * Rollup 工具与传统的 CommonJS 和 AMD 类非标准化的解决方案不同，Rollup适用的是ES6版本的 JavaScript 语言中的模块标准

    * Rollup 工具除了能够让开发人员适用标准的 ES 模块，还可以对所用的代码进行静态分析，并将未实际使用的代码进行剔除，避免冗余的依赖和代码

* 输出格式

  * CommonJS: Node.js 默认的模块规范，可以通过 webpack 工具来加载

  * AMD: 通过 RequireJS 来加载

  * IIFE: 自执行函数，可以通过 &lt;script&gt; 标签来加载

  * ESM: ES6 Module 标准规范，可以通过 webpack 工具和 Rollup 工具来加载

  * UMD: 兼容 IIFE、AMD、CJS 三种模块规范

## Rollup 打包 JavaScript 项目

* HOW

  1. 创建项目

      ``` sh
      mkdir rollup-js
      cd rollup-js
      mkdir src
      cd src
      mkdir modules
      cd ..
      mkdir dist
      npm init
      ```

  2. 安装插件

      ``` sh
      # Rollup 工具
      npm install --save-dev rollup
      # 代码压缩工具
      npm install --save-dev @rollup/plugin-terser
      # 旧版代码压缩工具
      # npm install --save-dev rollup-plugin-terser
      ```

  3. 创建文件

      ``` sh
      cd src
      NEW-ITEM main.js -type file
      mkdir ./modules
      cd modules
      NEW-ITEM hello.js -type file
      NEW-ITEM bye.js -type file
      # 回到项目根目录
      cd ../..
      New-Item rollup.config.js -type file
      ```

  4. main.js

      ``` js
      /**
       * main entry function.
      */
      import { sayHelloTo } from './modules/hello';
      import { sayByeTo } from './modules/bye';
      const resHello = sayHelloTo('king');
      console.log(resHello);
      const resBye = sayByeTo('king');
      console.log(resBye);
      ```

  5. src/modules/hello.js

      ``` js
      /**
      * Says hello function.
      */
      export function sayHelloTo(name) {
        const toSay = `Hello, ${name}!`;
        // TODO: return
        return toSay;
      }
      ```

  6. src/modules/bye.js

      ``` js
      /**
      * Says goodbye function
      */
      export function sayByeTo(name) {
        const toSay = `See you, ${name}!`;
        // TODO: return
        return toSay;
      }
      ```

  7. 配置 rollup.config.js

      ``` js
      /**
      * rollup config file+
      */
      // 代码压缩插件
      // import json from '@rollup/plugin-json';
      import terser from '@rollup/plugin-terser';
      export default {
        // 入口文件
        input: 'src/main.js',
        output: [
          {
            file: 'dist/main.bundle.js',
            // 输出文件格式
            format: 'cjs',
          },
          {
            file: 'dist/main.es.js',
            // 输出文件格式
            format: 'es',
          },
          {
            file: 'dist/main.min.js',
            // 输出文件格式
            format: 'iife',
            name: 'version',
            // 代码压缩插件
            plugins: [terser()]
          },
        ]
       };
      ```

  8. 配置 package.json

      ``` json
      // pacakge.json
      {
        "name": "rollup-js",
        "version": "1.0.0",
        "main": "index.js",
        "type": "module",  /* 加载 ES 模块 */
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "dev": "rollup -c --environment INCLUDE_DEPS,BUILD:development",
          "build": "rollup -c --environment INCLUDE_DEPS,BUILD:production"
        },
        "author": "MatchaEggTart",
        "license": "ISC",
        "description": "",
        "devDependencies": {
          "rollup": "^4.20.0",
          "@rollup/plugin-terser": "^0.4.4"
        }
      }
      ```

  9. 执行编译

      ``` sh
      npm run dev
      ```

  10. 运行代码

      ``` sh
      node .\dist\main.min.js
      ```

* ATTENTION

  * 要使用 ES6 模块

      如果在package.json 里面没添加 ``"type": "module"``，会弹出错误提示

      ``` warning
      (node:11176) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
      ```

* 解析

  * rollup.config.js

      > input 字段定义了应用的入口文件
      >
      > output 字段定义了输出文件的配置
      >
      > 如果要压缩代码，就要在json里面添加 plugins: [tarser()]

  * pacakge.json

      > dev 编译选项 定义了 Rollup 工具编译 为 开发版
      >
      > build 编译选项 定义了 Rollup 工具编译 为 生产版

## Rollup 打包 Typescript 项目

* HOW

  1. 创建项目

      ``` sh
      mkdir rollup-ts
      cd rollup-ts
      mkdir src
      cd src 
      mkdir modules
      cd ..
      mkdir dist
      npm init
      ```
  
  2. 安装 TypeScript 依赖

      ``` sh
      npm install --save-dev typescript
      # 创建 tsconfig.json
      tsc --init
      ```

  3. 安装 Rollup 工具

      ``` sh
      npm install --save-dev rollup @rollup/plugin-terser rollup-plugin-clear rollup-plugin-typescript2
      ```

  4. 创建 rollup.config.js 文件

      ``` sh
      NEW-ITEM rollup.config.js -TYPE file
      ```

      ``` js
      // rollup.config.js
      import typescript from 'rollup-plugin-typescript2';
      import terser from '@rollup/plugin-terser';
      import clear from 'rollup-plugin-clear';

      export default {
        input: 'src/main.ts',
        // 外部
        external: ['ms'],
        plugins: [
          clear({
            targets: ['dist'],
          }),
          typescript(),
          // terser(),
        ],
        output: [
          {
            file: 'dist/main.bundle.ts.js',
            format: 'cjs',
          },
          {
            file: 'dist/main.es.ts.js',
            format: 'es',
          },
          {
            file: 'dist/main.min.ts.js',
            format: 'iife',
            name: 'version',
            plugins: [
              terser(),
            ],
          },
        ]
      };
      ```

  5. 修改 tsconfig.json 文件，将 ``"module": "commonjs",`` 改为 ``"module": "ESNext",``

      ``` json
      // "module": "commonjs",                                /* Specify what module code is generated. */
      "module": "ESNext",
      ```

  6. rollup-ts/src/moudules/hello.ts

      ``` ts
      /**
       * Says hello function.
      */

      export function sayHelloTo(name: string) {
          const toSay = `Hello ${name}!`;
          // TODO: return
          return toSay;
      }
      ```

  7. rollup-ts/src/moudules/bye.ts

      ``` ts
      /**
       * Says goodbye function.
      */

      export function sayByeTo(name: string) {
          const toSay = `See you ${name}!`;
          // TODO: return
          return toSay;
      }
      ```

  8. rollup-ts/src/main.ts

      ``` ts
      /**
       * main entry function
      */

      import { sayHelloTo } from './modules/hello';
      import { sayByeTo } from './modules/bye';

      const resHello: string = sayHelloTo('king');
      console.log(resHello);
      const resBye: string = sayByeTo('king');
      console.log(resBye);
      ```

  9. 编译

      ``` sh
      npm run dev
      ```

  10. 执行

      ``` sh
      node ./dist/main.bundle.ts.js
      node ./dist/main.es.ts.js
      node ./dist/main.min.ts.js
      ```