angular.module('myApp').controller('EditController',function($scope,$location, $routeParams, $rootScope){
	console.log('inside edit');
 var id = $routeParams.eId;
	for(i=0; i< $rootScope.employees.length;i++){
		if($rootScope.employees[i].empId == id ){
			$scope.employee = $rootScope.employees[i];
		}
	}
	$scope.goHome =function(){
		$location.path('/home');
	}
});