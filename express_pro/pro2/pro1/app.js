var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')

var expressSession = require('express-session');
var dataFile = require('./data/dataFile.json');

app.use(cookieParser());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));
//session start

//session end
console.log(dataFile)

app.use(require('./routes/index.js'));
app.set('dataFile',dataFile);
//app.use(express.static('pro1/public'));

app.listen(8000,function(){
	console.log('Listening to port 8000')
});