// app.js文件
let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
let uniq = require('uniq')

module1.foo() //module1
modue2() //module2
module3.foo() //foo() module3
console.log(uniq(module3.arr)) //[ 1, 2, 3 ]

module1.msg="new msg";
module1.foo() //new msg

let module11 = require('./module1')
module11.foo() //new msg


require('./module1').msg="make sense";
require('./module1').foo()//"make sense"

let module5=require('./module1')
console.log("module5.count",module5.getcount())//1
module5.add()
module5.add()
console.log("module5.count",module5.getcount())//3


console.log("实际上module1里面的count私有是",require('./module1').getcount())//3

module3.check() 

/*
当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。
也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，
就返回第一次运行的结果，除非手动清除系统缓存。
*/ 