exports.foo = function () {
  console.log("module3 foo()");
};
exports.arr = [1, 2, 3, 3, 2];
exports.bar = function () {
  console.log("module3 bar()");
};
exports.check=function(){
  console.log("从别的模块 获取到module1里面的count私有是",require('./module1').getcount())
}
