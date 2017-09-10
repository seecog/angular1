angular.module('myApp').config(function($routeProvider){
	console.log('Inside config')
	$routeProvider
	.when('/dashboard',{
		templateUrl : '../views/dashboard.html',
		controller : 'DashboardController'
	})
	.when('/contact',{
		template : '<h1>Contact Us</h1>',
		controller : 'ContactController'
	})
	.when('/mohan',{
		template : '<h1>Hi this is mohan</h1>',
		controller : 'MohanController'
	})
	
	
	
});