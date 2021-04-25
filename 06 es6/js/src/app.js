import {foo, bar} from './module1'
import {DATA_ARR} from './module1'
import {fun1, fun2} from './module2'
import person from './module3'

// import $ from 'jquery'

// $('body').css('background', 'red')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()

console.log(person); //改变前
person.setName('JACK')
console.log(person.name); //改变后
console.log(person); 
/*
每次改变js文件，都一定要babel js/src -d js/lib 
browserify js/lib/app.js -o js/lib/bundle.js
然后再次运行
*/