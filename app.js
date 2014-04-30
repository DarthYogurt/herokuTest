var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app24696075:d7ullbfvpfk80e5agndtqbj6hh@ds031777.mongolab.com:31777/heroku_app24696075');

//heroku_app24696075:d7ullbfvpfk80e5agndtqbj6hh@ds031777.mongolab.com
//heroku_app24696075
//d7ullbfvpfk80e5agndtqbj6hh
//ds031777.mongolab.com:31777
//heroku_app24696075

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log();
	console.log ('Mongo DB Connection', 'ONLINE');
});

//mongodb://heroku_app24696075:d7ullbfvpfk80e5agndtqbj6hh@ds031777.mongolab.com:31777/heroku_app24696075
//mongodb://dbuser:dbpass@host:port/dbname
	
	
//
//var colors = require('colors');
//var express = require('express');
//
//var routes = require('./routes');
//var signin = require('./routes/signin.js');
//var admin = require('./routes/admin.js');
//
//var path = require('path');
//var app = express();
//
//var socketFiles = require('./socket/socketFiles.js');
//
////Server io==============================
//var server = require('http').createServer(app);
//var io = require('socket.io').listen(server);
//server.listen(8002);
//
//
////DB======================================
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/lfd');
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function callback () {
//	console.log();
//	console.log ('Mongo DB Connection'.yellow, 'ONLINE'.green);
//});
//
//// all environments =====================
//app.set('port', process.env.PORT || 8002);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//
////cookies=================================
//app.use(express.cookieParser());
//app.use(express.cookieSession({secret: 'ilikebigbuttsandicannotlie'}));
//app.use(express.static(path.join(__dirname, 'public')));

//development only=====================
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}


//=================clears user of current sockets
//var User = require('./models/User.js').User;
//User.update({}, {$set : {'socket': [] } }, {'multi': true}, function(err){ if (err){ console.log(err)} });


//authentication - simple basic======================
//var auth = express.basicAuth('t', 't');

//Routes==============================
//app.get('/', auth, routes.index);
//app.get('/restricted', routes.restricted);
//app.post('/loginMobile', signin.loginMobile);  //login android
//app.post('/login', signin.login);
//
////need login for web, 
//app.get('/admin', auth, admin.admin);
//app.get('/userlist', admin.userlist);
//app.post('/adduser', admin.adduser);
//app.delete('/deleteuser/:id', admin.deleteuser);
//
////TESTING===================================
//
//app.get('/hello', function(req,res){
//	res.send("hello");
//})
//app.get('/users', auth, function(req,res){
//	User.find({}, {}, function(err,result){
//		if(err){console.log(err);};
//		res.send(result);
//	});
//});
//app.get('/gameHistory', auth, function(req,res){
//	var GameHistory = require('./models/GameHistory.js').GameHistory;
//	GameHistory.find({}, {}, function(err,result){
//		if(err){console.log(err);};
//		res.send(result);
//	});
//});
//app.get('/matchSetting', auth, function(req,res){
//	MatchSetting.find({}, {}, function(err,result){
//		if(err){console.log(err);};
//		res.send(result);
//	});
//})
//app.get('/session', auth, function(req, res) {
//	console.log(req.session.user_id);
//	res.send(req.session);
//});
//app.get('/directSocketTest/:emit/:data', auth, function(req,res){
//	io.sockets.emit(emit, req.params.data);
//	res.send(emit + " : " + req.params.data );
//});
//app.get('/socketExample', function(req,res){
//	res.render('socketExample');
//});
//app.get('/testSocket', function(req,res){
////	console.log(req.session.user_id);
//	res.render('testSocket', { 'user_id': req.session.user_id });
//});
//app.get('/testFoundMatch', function(req,res){
//	socketFiles.testFoundMatch(io);
//	res.send();
//});
//
//app.get('/testGameHistory', function(req,res){
//	var GameHistory = require('./models/GameHistory.js').GameHistory;
//	console.log(GameHistory);
//});
//
//app.get('/testEmit', function(req,res) { res.sendfile('./views/testEmit.html')} );
//app.get('/severSendEmit', function(req,res){
//	var emitName = req.query.emitName;
//	var emitPayload = req.query.emitPayload;
//	io.sockets.emit(emitName, emitPayload, function(err, result){
//		console.log(err,result);
//	});
//	res.send("sent to: ", emitName, emitPayload );
//});
//
//app.get('/test', function(req,res){
//	
////	var GameHistory = require('./models/GameHistory.js').GameHistory;
////	GameHistory.find({}, function(result){console.log(result)});
////	
//	var RatingAttribute = require('./models/RatingAttribute.js').RatingAttribute;
//	RatingAttribute.find({}, function(err,result){
////			if(err){console.log(err)};
//			console.log(result)
//		;});
//	res.send();
//});

//SOCKET METHODS======================================


//io.sockets.on('connection', function (socket) {
//	
//	
//	socket.on('logUserId', function(data){socketFiles.logUserId(data, socket)});
//	socket.on('disconnect', function(){ socketFiles.disconnect(socket)});
//	
//	socket.on('matchHistoryList', function(){ socketFiles.matchHistoryList(socket)} );
//	
//	socket.on('profileUpdate', function(data){  socketFiles.profileUpdate(data,socket)});
//	socket.on('profileGet', function(data){ socketFiles.profileGet(data,io,socket)});
//	
//	socket.on('message', function(data){ socketFiles.message(data,io,socket) });
//	socket.on('messageNew', function( ){ console.log("Message Send"); });
//	//socket.on('messageReceive', function(socket){ console.log("Message Receive");});  //triggered by a new message snet
//	
//	//socket.on('notification', function(data){console.log(data);}); //May not be needed as method should be called outside to emit
//
//	socket.on('gameSettingGet', function() { console.log("Game setting get");});
//	socket.on('gameSettingUpdate', function(){ console.log("Game setting update");});
//	
//	socket.on('matchSearch', function(data){ socketFiles.matchSearch(data,socket)});
//	//socket.on('matchFound', function(socket) { console.log("Match Found");});  May not be needed as method should be called outside to emit
//	socket.on('matchStopSearch', function(){ socketFiles.matchStopSearch(io,socket)});
//	socket.on('matchStatus', function() {socketFiles.matchStatus(socket)});
//	
//	
////	socket.on('getRatingAttribute', function(){ socketFiles.getRatingAttributes(io,socket) });
//	
//	
//	
//	//TEST FUNCTIONS
//	socket.on('test', function(data){socketFiles.test(data, socket)});
////	socket.emit('news', { hello: 'world' });
//	socket.on('event', function(){});
//	
//});

//
//setInterval(function(){
//	//console.log("testing interval");
//}, 5000);
//	



//OLD CODE============

//var http = require('http');

//app.use(app.router);
//http.createServer(app).listen(app.get('port'), function(){
//	console.log('Express server listening on port ' + app.get('port'));
//});

//socket.on('my other event', function (data) {		console.log(data);	});
//socket.on('testServer', function (data) {console.log(data);});	