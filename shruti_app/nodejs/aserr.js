var async = require('async');
async.waterfall([
function(callback){
	callback(new Error('Err'),11)
},
function(arg1,callback){
	
	callback(new Error('Any error'),22);
},
function(arg1,callback){
	callback(null,'final result')
}



],function(err,result){
	console.log('The result is ');
	console.log(result)
	
});