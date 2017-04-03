angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'view/login.html',
		controller : 'loginController'
	})
	.when('/home',{
		templateUrl : 'view/home.html',
		controller : 'homeController'
	})
	.when('/detail',{
		templateUrl : 'view/detail.html',
		controller : 'detailController'
	})
}]);