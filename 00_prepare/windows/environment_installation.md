# 环境安装

## 配置 ssh

* ssh指令

  ```sh
  ssh-keygen -t rsa -C "邮箱"
  ```

* git 配置用户名邮箱

  ```sh
  git config --global user.email "邮箱"
  git config --global user.name "用户名"
  ```

## 配置 PowerShell

* ATTENTION

  ```log
  npm : 无法加载文件 D:\Nodejs\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/f wlink/?LinkID=135170 中的 about_Execution_Policies。
  ```

  * 解决方法

    ```powershell
    get-ExecutionPolicy
    => Restricted
    set-ExecutionPolicy -Scope CurrentUser
    => 位于命令管道位置 1 的 cmdlet Set-ExecutionPolicy  
    => 请为以下参数提供值:
    => ExecutionPolicy:
    remotesigned
    ```

## Nvm 安装

* [地址](https://github.com/coreybutler/nvm-windows)

* 安装路径

  * 最好是

    D:\Nodejs\nvm

    D:\Nodejs\nodejs

* 设置镜像

  * 在 nvm文件夹的 settings.txt 文件下添加配置
  
    ``` powershell
    nvm node_mirror https://npmmirror.com/mirrors/node/
    nvm npm_mirror https://npmmirror.com/mirrors/npm/
    ```

* 安装版本

  * 安装最新版

    ```bash
    nvm install latest
    ```
  
  * 安装指定版本

    ```bash
    nvm install vX.Y.Z
    ```

* 查看版本
  
  * 指令

    ```shell
    nvm list
    ```

* 使用版本
  
  * 指令

    ```shell
    nvm use X.Y.Z
    ```
  
  * ATTENTION

    安装完毕设置好需要重启才能启用 nvm 指令

* 卸载版本
  
  * 指令

    ```shell
    nvm uninstall X.Y.Z
    ```

## Nodejs

* 配置镜像

  ```bash
  npm config set registry https://registry.npmmirror.com/
  npm config get registry
  ```

## 配置 姓名邮箱

* npmrc

  * 位置
  
    D:\Nodejs\nodejs\node_modules\npm\.npmrc

  ``` txt
  init-author-name=MatchaEggTart
  init-aussthor-email=MatchaEggTart@hotmail.com
  init-author-url=
  init-license=
  ```

## VScode 插件

* Code Runner

  ``` sh
  npm install -g ts-node # 直接编译 ts文件
  ```

## Pnpm

* ATTENTION

  在 Windows 用挺难的，这里暂时放弃吧

* 安装

  ```powershell
  npm install -g pnpm
  ```

* 配置镜像

  ```bash
  # 设置新的镜像地址
  pnpm set registry https://registry.npmmirror.com
  pnpm  config get registry
  ```

* 配置路径

  ```bash
  # 允许设置全局安装包的 bin 文件的目标目录。
  pnpm config set global-bin-dir "D:\Nodejs\pnpm-store"
  # 包元数据缓存的位置。
  pnpm config set cache-dir "D:\Nodejs\pnpm-store\pnpm-cache"
  # pnpm 创建的当前仅由更新检查器使用的 pnpm-state.json 文件的目录。
  pnpm config set state-dir "D:\Nodejs\pnpm-store\pnpm-state"
  # 指定储存全局依赖的目录。
  pnpm config set global-dir "D:\Nodejs\pnpm-store\global"
  # 所有包被保存在磁盘上的位置。
  #（可选，以下这条命令可以选择不执行也是OK的）
  pnpm config set store-dir "D:\Nodejs\pnpm-store\pnpm-store"
  ```
