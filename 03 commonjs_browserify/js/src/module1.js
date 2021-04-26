let count =1;
module.exports = {
    msg : 'module1',
    getcount(){return count},
    add(){count++},
    foo() {
        console.log(this.msg)
        console.log("this in module1",this)
    }
}