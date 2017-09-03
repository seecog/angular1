var http = require('http')

http.createServer(function(req,res){
	
	console.log('The request come')
	res.end('I am an indian');
	
}).listen(8000);

console.log('Server started')