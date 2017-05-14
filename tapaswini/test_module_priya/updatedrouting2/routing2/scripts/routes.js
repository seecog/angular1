angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
	.when('/category',{
		templateUrl: 'views/category.html',
		controller: 'categoryController'
	})
	.when('/addcategory',{
		templateUrl: 'views/addcategory.html',
		controller: 'addcategoryController'
	})
	.when('/editcategory/:id',{
		templateUrl: 'views/editcategory.html',
		controller: 'editcategoryController'
	})
}])