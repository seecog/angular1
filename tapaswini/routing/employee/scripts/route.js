angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : '../views/login.html',
		controller : 'LoginController'
	})
	.when('/home',{
		templateUrl : '../views/home.html',
		controller : 'HomeController'
	})
	.when('/studentinfo/:id',{
		templateUrl : '../views/studentinfo.html',
		controller : 'StudentinfoController'
	})
	
}])