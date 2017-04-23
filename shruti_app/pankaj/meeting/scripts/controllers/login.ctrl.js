angular.module('myApp').controller('Logincontroller',function($scope,$rootScope,Authentication){
	
	$scope.checkLogin = function(){
		$rootScope.loginstt = false;
		Authentication.login($scope.email,$scope.password)
		
	}
});