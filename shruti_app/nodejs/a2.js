var async = require('async')
async.waterfall([
function(callback){
var ar = [10,30,66,77];	
setTimeout(function(){
var s = 0;
for(i=0;i<ar.length;i++)
	s += ar[i];
console.log('The sum is '+s)
callback(null,s)
},3000);
},
function(arg1,callback){
	setTimeout(function(){
	var s = 0;
	while(arg1){
		var x = arg1%10;
		s += x;
		arg1 = parseInt(arg1/10);
	}
	console.log('Digit sum is '+s);
	callback(null,s)
	},2000);
},
function(arg1,callback){
	setTimeout(function(){
	var p = 1;
	while(arg1){
		var x = arg1%10;
		p *= x;
		arg1 = parseInt(arg1/10);
	}
	console.log('the product is '+p)
    callback(null,p)	
	},1000);
}
],function(err,result){
console.log('Result is '+result)	
	
});






