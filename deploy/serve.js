var express = require('express');
var path = require('path');
var app = express();

require('./server')(app, true);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);