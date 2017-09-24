var events = require('events');
var util = require('util');
var process = require('process')
class Tick{
	
}

process.nextTick(function(){
	
	console.log('Hello again')
});
util.inherits(Tick,events);


var ob = new Tick();
ob.on('fire',function(data){
	
	console.log(data)
});
Tick.prototype.show = function(){
		this.emit('fire','-')	
}

setInterval(function(){
ob.show();
},500);

