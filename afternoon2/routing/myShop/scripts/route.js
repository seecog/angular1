angular.module('myApp').config(function($routeProvider){
	
	$routeProvider
	.when('/about',{
		templateUrl : '../pages/about.html',
		controller : AboutController
	})
	.when('/contact',{
		templateUrl : '../pages/contact.html',
		controller : ContactController		
	})
	.when('/products',{
		templateUrl : '../pages/products.html',
		controller : ProductsController		
	})
});