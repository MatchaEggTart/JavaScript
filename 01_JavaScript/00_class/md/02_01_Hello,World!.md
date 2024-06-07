# Hello,world!

## "script" 标签

* &lt;script&gt;

  * WHAT

    - 包裹了 JavaScript 代码，当浏览器遇到 &lt;script&gt; 标签，代码会自动运行

  * EXAMPLE
    ``` html
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <title></title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="css/style.css" rel="stylesheet">
    </head>
    
    <body>
      <p>script 标签之前...</p>
    
      <script>
        alert("Hello, World!");
      </script>
    
      <p>...script 标签之后</p>
    
    </body>
    
    </html>
    ```

## 现代的标记（markup）

* &lt;script&gt;

  * WHAT

    - &lt;script&gt;有一些现在基本不用的特性(attribute)，比如 type、language

* type 特性

  * WHAT

    - 以前需要声明 script 代码类型，现在默认是 JavaScript，不过它可以用于 JavaScript 模块
    - 写法： `<script type="text/javascript"> </script>`

* language 特性

  * WHAT

    - 为了显示脚本使用的语言，现在默认的就是 JavaScript，不需要了
    - 写法： `<script language=...> </script>`
  
## 外部脚本

* src

  * WHAT

    - 脚本文件可以通过 src 特性（attribute）添加到 HTML 文件中
    - src 后面可以是 绝对路径、相对路径 或 URL
    - 可以插入多个 script 附加多个脚本

  * EXAMPLE

    - 写法： `<script src="/path/to/script.js"></script>`

  * ATTENTION

    - 一个单独的 &lt;script&gt; 标签不能同时有 src 特性和内部包裹的代码。这将不会工作：
      ``` javascript
      <script src="file.js">
        alert(1); // 此内容会被忽略，因为设定了 src
      </script>
      ```

    - 如果想要应用外部的 &lt;script src="..."&gt;，又要使用内部 &lt;script&gt;，那么就要使用两个 &lt;script&gt; 标签
      ``` javascript
      <script src="file.js"></script>
      <script>
        alert(1);
      </script>
      ```

## 总结

* 我们使用 script 标签将 js代码添加到代码

* type 和 language 特性 (attribute) 不是必须的

* 外部的脚本可以通过 `<script src="/path/to/script.js"></script>` 插入
