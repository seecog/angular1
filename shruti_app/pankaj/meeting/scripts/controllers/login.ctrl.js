angular.module('myApp').controller('Logincontroller',function($scope,$rootScope,Authentication){
	
	$scope.checkLogin = function(){
		
		Authentication.login($scope.email,$scope.password)
		
	}
});