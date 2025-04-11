// TODO: define const path
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// TODO: module exports
module.exports = {
  // 定义应用入口
  entry: './src/index.ts',
  mode: 'development',  // 开发模式（不压缩代码，包含 source map）
  // module 这些选项决定了如何处理项目中的不同类型的模块
  module: {
    /* 
     * 通过 loader 可以使 webpack 支持多种语言和预处理器语法编写的模块
     * loader 向 webpack 描述了如何处理非原生 模块，并将相关依赖引入到你的 bundles中
     */
    rules: [
      // 加载 ts-loader 插件 处理全部 .ts 格式文件
      {
        // 使用正则表达式，匹配哪些文件
        test: /\.tsx?$/, // 匹配 .ts 和 .tsx 文件
        /*
         * ts-loader 需要配合 typescript 包和 tsconfig.json 配置文件使用
         * use可以是json也可以是数组，这里说匹配的文件使用 ts-loader插件
         */
        use: 'ts-loader', // 使用 ts-loader 处理 TypeScript 文件
        // 排除所有符合条件的模块，在node_modules里面的ts文件都被排除
        exclude: /node_modules/ // 排除 node_modules 目录
      }
    ]
  },
  /*
   * 解决
   * webpack中使用resolve字段来配置模块的相关解析策略。本质上是通过对resolve库的使用来解析引入模块路径
   */
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] // 自动解析这些扩展名（导入时可省略后缀）
  },
  output: {
    // 定义应用出口
    filename: 'bundle-ts.js',
    path: path.resolve(__dirname, 'dist'), // 输出路径（当前目录的 dist 文件夹）
    clean: true // 每次构建前清理输出目录
  },
  // CopyWebpackPlugin
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
      ]
    })
  ]
} 
