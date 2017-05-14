angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'views/login.html',
		controller : 'loginController'
	})
	.when('/category',{
		templateUrl : 'views/view_cat.html',
		controller : 'categoryController'
	})
	.when('/addcategory',{
		templateUrl : 'views/addcategory.html',
		controller : 'addCatController'
	})
	.when('/addproducts',{
		templateUrl : 'views/addproducts.html',
		controller : 'addProductController'
	})
	.when('/viewproducts',{
		templateUrl : 'views/viewproduct.html',
		controller : 'viewProductController'
	})   
	.when('/editcategory/:id',{
		templateUrl : 'views/editcat.html',
		controller : 'editcatController'
	})
}]);