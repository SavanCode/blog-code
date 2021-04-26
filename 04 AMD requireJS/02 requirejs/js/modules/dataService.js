// 定义没有依赖的模块
define(function() {
    let msg = 'www.baidu.com'
    function getMsg() {
      console.log(this,msg)
      return msg.toUpperCase()
    }
    return { getMsg }
  })