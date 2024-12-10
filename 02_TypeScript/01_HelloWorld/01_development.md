# 开发环境

* npm 安装编译器

  ``` bash
  npm install -g typescript # 全局安装编译器

  tsc -v # 参看版本
  ```

* Hello World

  * 01_HelloWorld.ts

    ``` ts
    console.log("Hello World! This is a TypeScript code.");
    ```

  * 编译

    ``` bash
    tsc .\01_HelloWorld.ts
    # 生成 01_HelloWorld.js 文件
    ```

  * 运行代码

    ``` sh
    node .\01_HelloWorld.js
    ```

* tsconfig 配置文件进行自动编译

  * 创建自动编译文件

    ``` bash
    mkdir helloworld-tsconfig
    cd .\helloworld-tsconfig\
    tsc --init
    # 初始化 tsconfig 配置文件
    ```

  * 创建文件

    ``` powershell
    New-Item helloWorld.ts -type file
    ```

    ``` bash
    touch helloWorld.ts
    ```

  * .\helloworld-tsconfig\helloWorld.ts

    ``` ts
    function sayHello(msg: string) :void {
      console.log(`Hello World! ${msg}`);
    }
    
    sayHello('This is a TypeScript code.');
    ```

  * 编译指令

    ``` bash
    tsc --project tsconfig.json
    ```

  * 编译快捷键

    Vscode 按 Ctrl + Shift + B，选择 build，就可以自动编译文件夹下的所有 ts文件

* 加速编译运行

  * 安装 ts-node

    ``` sh
    npm install -g ts-node
    ```

  * vscode 安装 Code Runner

  * 运行
  
    右键ts文件，选择 Run Code 即可
