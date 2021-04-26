(function() {
    requirejs.config({
      baseUrl: 'js/', //基本路径 出发点在根目录下
      paths: {
        //映射: 模块标识名: 路径
        alerter: './modules/alerter', //此处不能写成alerter.js,会报错
        dataService: './modules/dataService'
      }
    })
    
    //这里是顶部的执行，而dataservice 会通过alerter自己里面找
    requirejs(['alerter'], function(alerter) {
      alerter.showMsg()
    })

    require(["dataService"], function(dataService){
      dataService.getMsg();
  });

  })()