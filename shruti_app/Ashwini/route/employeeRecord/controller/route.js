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
	.when('/detail/:userId',{
		templateUrl : 'view/detail.html',
		controller : 'detailController'
	})
	.when('/add',{
		templateUrl : 'view/add.html',
		controller : 'addController'
	})
	.when('/edit/:userId',{
		templateUrl : 'view/edit.html',
		controller : 'editController'
	})
}]);