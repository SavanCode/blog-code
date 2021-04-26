// 定义没有依赖的模块
define(function() {
    let msg = 'www.baidu.com'
    function getMsg() {
      console.log(msg)
      return msg.toUpperCase()
    }
    return { getMsg }
  })