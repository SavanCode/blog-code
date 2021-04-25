ES6-Babel-Browserify使用教程
简单来说就一句话：使用Babel将ES6编译为ES5代码，使用Browserify编译打包js。

- 定义package.json文件
 {
   "name" : "es6-babel-browserify",
   "version" : "1.0.0"
 }
- 安装babel-cli, babel-preset-es2015和browserify
npm install babel-cli browserify -g
npm install babel-preset-es2015 --save-dev
preset 预设(将es6转换成es5的所有插件打包)
- 新建&定义.babelrc文件
  {
    "presets": ["es2015"]
  }
- 定义模块代码
- 编译并在index.html中引入
使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib
使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js
- 然后在index.html文件中引入
```
 <script type="text/javascript" src="js/lib/bundle.js"></script>```