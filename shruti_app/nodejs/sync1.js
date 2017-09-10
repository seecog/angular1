var async = require('async')
async.waterfall([

function(callback){
	
	callback(null,11,22);
},
function(arg1,arg2,callback){
	console.log(arg1+'--'+arg2)
	callback(null,33);
},
function(arg1,callback){
	console.log('New arg '+arg1)
	callback(null,'The final result')
}
],function(err,result){
	
	console.log('The result is '+result)
});


