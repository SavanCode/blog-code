// main.js文件
define(function (require) {
    var m1 = require('./module1')
    var m4 = require('./module4')
    m1.show()
    m4.show()
  }) 
  /*
  Objectshow: ƒ show()__proto__: Object "module1 show() module1"
  module4.js:6 
  module4 show() I Will Back
  module4.js:11 
  异步引入依赖模块3  abc123
  */ 