var async = require('async');
async.series([
function(callback){
	
	callback(throw new Error('Drastic error'),11)
},
function(callback){
	callback(null,22)
}

],function(err,result){
	console.log('The result is ')
	console.log(result)
	
});