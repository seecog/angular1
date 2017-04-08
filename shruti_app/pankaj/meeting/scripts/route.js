angular.module('myApp').config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/',{
	templateUrl : 'views/login.html',
	controller : 'Logincontroller'
})
.when('/register',{
	templateUrl : 'views/register.html',
	controller : 'Registercontroller'
})
}]);