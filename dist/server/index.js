module.exports =  function serve(app,files=true){
  var express = require('express');
  var path = require('path');
  
  app.get('/hello',function(req,res){
    res.send('hello world');
  });
  
  if(files){
    app.use(express.static(path.resolve(__dirname,'..')));
  }
};
