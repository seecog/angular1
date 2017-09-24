var events = require('events');
var util = require('util');
var process = require('process')
class Tick{
	
}

process.nextTick(function(){
	
	console.log('Check ')
})


util.inherits(Tick,events);


var ob = new Tick();
ob.on('first',function(data){
	
	console.log('The captured data is ')
	console.log(data)
});
Tick.prototype.show = function(){
	this.emit('first',100)
}
ob.show();



