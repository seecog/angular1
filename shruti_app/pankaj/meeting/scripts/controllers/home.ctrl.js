angular.module('myApp').controller('Homecontroller',function($scope,Authentication){
	console.log('Home page')
	$scope.logOut = function(){
		Authentication.logout();
	}
});