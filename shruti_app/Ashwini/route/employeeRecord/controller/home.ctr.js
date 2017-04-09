angular.module('myApp').controller('homeController', function($scope, $rootScope){
	
	$scope.delEmplyee = function(x){
		$rootScope.employees.splice(x,1);
	}
});