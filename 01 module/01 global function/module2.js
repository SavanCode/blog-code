let data2 = 'other data'
//let  data ='new data from module2' 这样定义 由于与第一个同名，会有错误 从而 整个模块不可以导入
function foo() {  //与另一个模块中的函数冲突了
  console.log(`foo() from module2 ${data2}`)
} 