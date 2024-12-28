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
