var http = require("http");
var colors = require('colors');
var express = require('express');

var path = require('path');
var app = express();

//Server io==============================
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(80);

//all environments =====================
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.bodyParser());
//app.use(express.methodOverride());

//cookies=================================
//app.use(express.cookieParser());
//app.use(express.cookieSession({secret: 'ilikebigbuttsandicannotlie'}));
//app.use(express.static(path.join(__dirname, 'public')));

//development only=====================
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}/
app.get('/', function(req,res){
	res.send("testing");
});