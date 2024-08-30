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