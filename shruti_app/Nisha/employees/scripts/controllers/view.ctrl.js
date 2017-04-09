angular.module('myApp').controller('ViewController',function($scope,$location, $routeParams, $rootScope){
	console.log('inside view');
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