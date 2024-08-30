// TODO: define const path
const path = require('path');
// TODO: copy the html file to dist folder
const CopyWebpackPlugin = require('copy-webpack-plugin');



// TODO: module exports
module.exports = {
  // 定义应用入口
  entry: './src/index.js',
  mode: 'development',
  output: {
    // 定义应用出口
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // TODO:CopyWebpackPlugin
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
      ],
    }),
  ],
} 