// TODO: 引入 node 的 path 模块
const path = require("path");
// import path from "node/path";
// TODO: module exports
module.exports = {
  // 定义应用入口
  /* 
   * 等于 entry: "./src/index.js"
   * 等于 entry: __dirname + "/src/index.js",
   */
  entry: path.resolve(__dirname, "src/index.js"),

  mode: "development",
  // 定义应用出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
}
