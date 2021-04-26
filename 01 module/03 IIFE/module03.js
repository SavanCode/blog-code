(function (window) {
  //数据
  let data = "IIFE IIFE";

  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`);
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

  //把东西直接给了window
  window.myModule = { foo, bar };
})(window);
