angular.module('movieDirectory').config(function($stateProvider){
	
	$stateProvider.state('home',{
		url : '/',
		templateUrl : '../../views/home.html',
		controller : function(){
			console.log('Inside the hoome controller')
		}
		
	})
	
	
});