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
      format: 'cjs'
    },
    {
      file: 'dist/main.es.js',
      // 输出文件格式
      format: 'es'
    },
    {
      file: 'dist/main.min.js',
      // 输出文件格式
      format: 'iife',
      name: 'version',
      // 代码压缩插件
      plugins: [terser()]
    }
  ]
}
