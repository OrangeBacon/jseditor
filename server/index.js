module.exports =  function serve(app,files=true){
  var express = require('express');
  var path = require('path');
  if(files){
    app.use(express.static(path.resolve(__dirname,'..')));
  }
};
