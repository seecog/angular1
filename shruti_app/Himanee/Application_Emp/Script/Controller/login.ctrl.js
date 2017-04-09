angular.module('myApp').controller('logincontroller',function($scope,$location){
	
	console.log('inside controller')

	 $scope.checkLogin = function(){
		 console.log('inside check login function')
	  
	  if($scope.username=='mohan' && $scope.password=='123456')
	  {
		  console.log('checking user password')
		  $location.path('/home');
	  }
  }
	
});