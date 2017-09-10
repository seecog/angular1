var async = require('async');
async.series({
first : function(callback){
	
	callback(null,11)
	
},
second :function(callback){
	
	callback(null,22)
},
third : function(callback){
	callback(null,33)
}
},function(err,result){
	console.log('The result is ')
	console.log(result)
});