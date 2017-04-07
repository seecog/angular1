angular.module('myApp').controller('HomeController',function($scope,$location){
	console.log('inside home')
  $scope.logout = function()
  {
	  
	  $location.path('/');
  }
	
});