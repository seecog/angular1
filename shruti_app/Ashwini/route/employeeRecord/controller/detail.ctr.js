angular.module('myApp').controller('detailController', function($scope,$rootScope,$routeParams){
	var id = $routeParams.userId;
	for(i=0; i< $rootScope.employees.length;i++){
		if($rootScope.employees[i].userId == id ){
			$scope.employee = $rootScope.employees[i];
		}
	}
});