const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  /**
   * 默认值 "/" 即项目的根目录
   * "./" 当前目录  
   * 如你的应用布在子路径下，如 localhost:8081/myapp/  则这个值 为'/myapp/"'
   */
  publicPath: "./", //
  outputDir:'libs', //构建好的文件输出在哪里
  //assetsDir:''//放置静态资源的地方(js/css/img)
  transpileDependencies: true
})
