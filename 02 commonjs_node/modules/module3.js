//module3.js
//const { printModule4 } = require("./module4.js");
let printModule4 =require('./module4');
exports.foo = function () {
  printModule4();
  console.log("foo() module3");
};
exports.arr = [1, 2, 3, 3, 2];
