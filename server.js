var mongoose = require ('mongoose')
var express = require('express')
var bp = require('body-parser')
var path = require('path')
root = __dirname
port = process.env.PORT || 8007
app = express(),
path = require('path');

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'./bower_components')));
app.use(bp.json())
app.listen(port,function(){
	console.log('server running on port 8007');
});
