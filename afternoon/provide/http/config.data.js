angular.module('myapp').config(function($provide){
	
	$provide.provider('Firebase',function(){
		
		this.$get = function(){
		return {
			url : 'https://books-ad908.firebaseio.com/'
		};
		}
	});
	
});