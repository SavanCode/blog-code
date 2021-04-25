(function(window){
    let name= dataservice.js;
    function getName(){
        return this.name
    }
    window.dataservice={getName}
})(window)