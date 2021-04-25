> 这里是如何使用browserify模拟浏览器运行

- 创建项目结构

```
|-js
  |-dist //打包生成文件的目录
  |-src //源码所在的目录
    |-module1.js
    |-module2.js
    |-module3.js
    |-app.js //应用主源文件
|-index.html //运行于浏览器上
|-package.json
  {
    "name": "browserify-test",
    "version": "1.0.0"
  }
```
- 下载第三方模块
npm install uniq --save // 用于数组去重
- 下载browserify
全局: npm install browserify -g
局部: npm install browserify --save-dev

- 定义模块代码(同服务器端)
注意：index.html文件要运行在浏览器上，需要借助browserify将app.js文件打包编译，如果直接在index.html引入app.js就会报错！

- 打包处理js
根目录下运行browserify js/src/app.js -o js/dist/bundle.js

- 页面使用引入
在index.html文件中引入
`<script type="text/javascript" src="js/dist/bundle.js"></script>`