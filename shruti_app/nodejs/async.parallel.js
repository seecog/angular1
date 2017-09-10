var async = require('async');
async.parallel([
function(callback){
	
	callback(null,11)
	
},
function(callback){
	
	callback(null,22)
},
function(callback){
	callback(null,33)
}
],function(err,result){
	console.log('The result is ')
	console.log(result[0])
});