angular.module('myApp').controller('LoginController',function($scope,$location){
	console.log('inside con')
  $scope.checkLogin = function(){
	  
	  if($scope.username=='mohan' && $scope.password=='123456')
	  {
		  $location.path('/home');
	  }
  }
	
});