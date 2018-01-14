angular.module('movieApp').factory('MovieInterceptor',function(){
	var obj = {};
	obj.request=function(config){
		config.url=config.url+'&api_key=8301a21598f8b45668d5711a814f01f6'
		console.log(config);
		return request;
	}
	obj.requestError=function(config){
		console.log(config);
		return request;
	}
	obj.response=function(config){
		console.log(config);
		return request;
	}
	obj.responseError=function(config){
		console.log(config);
		return request;
	}
	
});
angular.module('movieApp').config(function($httpProvider){
$httpProvider.interceptors.push('MovieInterceptor')	
})
