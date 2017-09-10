var async = require('async');
async.series([

function(callback){
	
	callback(null,11)
},
function(callback){
	
	callback(null,22)
},
function(callback){
	
	callback(null,33)
}],function(err,result){
	if(err)
	{
		throw err;
	}
	console.log('The result is ')
	console.log(result)
});;