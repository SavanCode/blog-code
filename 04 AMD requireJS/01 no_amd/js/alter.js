(function(window,dataservice){
    let msg='alter.js';
    function showMsg(){
        console.log(msg,dataservice.getName())
    }
    window.alter={showMsg}
})(window,dataservice)