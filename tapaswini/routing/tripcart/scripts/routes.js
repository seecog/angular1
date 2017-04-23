angular.module('myApp').config(['$routeProvider',function($routeProvider){

$routeProvider
.when('/',{
templateUrl : 'views/home.html',
controller : 'HomeController'
})
.when('/addProduct',{
	templateUrl : 'views/addproduct.html',
	controller : 'AddproductController'
})
.when('/productView/:id',{
	templateUrl : 'views/viewproduct.html',
	controller : 'ViewproductController'
})
.when('/shopping',{
	templateUrl : 'views/cart.html',
	controller : 'CartController'
})
.otherwise({
redirectTo : '/'
})
}]);