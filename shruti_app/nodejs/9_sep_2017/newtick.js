var process = require('process')

setInterval(function(){
	
	console.log('hello')
},0);

process.nextTick(function(){
	
	console.log('Checking')
})


