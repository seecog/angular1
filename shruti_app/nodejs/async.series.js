var async = require('async');
async.series([
function(callback){
	
	callback(new Error(),11)
	
},
function(callback){
	
	callback(null,22)
},
function(callback){
	callback(null,33)
}
],function(err,result){
	console.log('The result is ')
	console.log(result)
});