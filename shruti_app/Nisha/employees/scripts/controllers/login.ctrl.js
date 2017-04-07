angular.module('myApp').controller('LoginController',function($scope,$location){
	console.log('inside con')
  $scope.checkLogin = function(){
	  
	  if($scope.username=='nisha' && $scope.password=='12345')
	  {
		  $location.path('/home');
	  }
  }
	
});