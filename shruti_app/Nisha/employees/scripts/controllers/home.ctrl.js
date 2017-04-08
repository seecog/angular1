angular.module('myApp').controller('HomeController',function($scope,$location, $rootScope){
	console.log('inside home');
  $scope.logout = function()
  {
	  
	  $location.path('/');
  }
	$scope.delEmplyee = function(x){
		$rootScope.employees.splice(x,1);
	}
});