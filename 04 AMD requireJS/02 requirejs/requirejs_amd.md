1. 下载require.js, 并引入
  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将require.js导入项目: js/libs/require.js 
2. 创建项目结构
  ```
  |-js
    |-libs
      |-require.js
    |-modules
      |-alerter.js
      |-dataService.js
    |-main.js
  |-index.html
  ```
3. 定义require.js的模块代码

4. 配置好main.js 以及页面模块设置,即可运行
5. 使用第三方基于require.js的框架(jquery)
  * 将jquery的库文件导入到项目: 
    * js/libs/jquery-1.10.1.js
  * 在main.js中配置jquery路径
    ```
    paths: {
              'jquery': 'libs/jquery-1.10.1'
          }
    ```
  * 在alerter.js中使用jquery
    ```
    define(['dataService', 'jquery'], function (dataService, $) {
        var name = 'xfzhang'
        function showMsg() {
            $('body').css({background : 'red'})
            alert(name + ' '+dataService.getMsg())
        }
        return {showMsg}
    })
    ```
------------------------------------------------------------------------
 
6. 使用第三方不基于require.js的框架(angular)
* 将angular.js导入项目
* js/libs/angular.js

* 在main.js中配置
```
    (function () {
      require.config({
        //基本路径
        baseUrl: "js/",
        //模块标识名与模块路径映射
        paths: {
          //第三方库
          'jquery' : './libs/jquery-1.10.1',
          'angular' : './libs/angular',
          //自定义模块
          "alerter": "./modules/alerter",
          "dataService": "./modules/dataService"
        },
        /*
         配置不兼容AMD的模块
         exports : 指定与相对应的模块名对应的模块对象
         */
        shim: {
          'angular' : {
            exports : 'angular'
          }
        }
      })
      //引入使用模块
      require( ['alerter', 'angular'], function(alerter, angular) {
        alerter.showMsg()
        console.log(angular);
      })
    })()
 ``` 