// 匿名闭包函数
(function (window, $) {
  //数据
  let data = "module04";

  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`);
    $("body").css("background", "red");
  }

  function bar() {
    //用于暴露有函数
    console.log(`bar() ${data}`);
    otherFun(); //内部调用
  }

  function otherFun() {
    //内部私有的函数
    console.log("otherFun()");
  }

  //暴露行为
  window.myModule = { foo, bar };
})(window, jQuery);
