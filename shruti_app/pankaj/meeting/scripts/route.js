angular.module('myApp').run(function($rootScope,$location){
	
	$rootScope.$on('$routeChangeError',function(){
		$location.path('/')
		
	});
	
});

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
.when('/home',{
	templateUrl : 'views/home.html',
	controller : 'Homecontroller',
	resolve : {
		
		checkAuth : function(Authentication){
			return Authentication.signInRequire();
		}
		
	}
})
.when('/addmember/:uid/:mid',{
	templateUrl : 'views/addmember.html',
	controller : 'Addmembercontroller'
})
.when('/memberlist/:uid/:mid',{
	templateUrl : 'views/memberlist.html',
	controller : 'Memberlistcontroller'
});
}]);