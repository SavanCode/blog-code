> 这里是如何使用服务器端完成module操作

- 下载安装node.js
- 创建项目结构
    注意：用npm init 自动生成package.json时，package name(包名)不能有中文和大写
```
|-modules
  |-module1.js
  |-module2.js
  |-module3.js
|-app.js
|-package.json（npm自动创建）
  {
    "name": "commonJS-node",
    "version": "1.0.0"
  }
```
- 下载第三方模块
npm install uniq --save // 用于数组去重

- 编写模块代码
- 通过node运行app.js
    命令行输入node app.js，运行JS文件