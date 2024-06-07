# 环境安装

## Nvm 安装

* [地址](https://github.com/coreybutler/nvm-windows)

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

* 卸载版本
  
  * 指令

    ```shell
    nvm uninstall X.Y.Z
    ```

## 