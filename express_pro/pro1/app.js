var express = require('express');
var app = express();
app.get('/',function(req,res){	
	res.send('Hello world')
});

app.set('port',process.env.PORT || 3000)

var server = app.listen(app.get('port'),function(){
	
	console.log('Listining to port '+app.get('port'))
	
});
/*var http = require('http');
var myServer = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.write('Hello world');
	res.end();
});

myServer.listen(3000);
*/