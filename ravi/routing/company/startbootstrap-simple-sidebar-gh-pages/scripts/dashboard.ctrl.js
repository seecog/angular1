angular.module('myApp').controller('DashboardController',function($scope,$rootScope){
	
	console.log('Inside the dashboard controller')
	$scope.employees = $rootScope.emps;
})