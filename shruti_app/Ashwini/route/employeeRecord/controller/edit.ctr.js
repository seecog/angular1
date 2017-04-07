angular.module('myApp').controller('editController',function($scope,$rootScope,$location,$routeParams){
	
	var id = $routeParams.userId;

	for(i=0; i< $rootScope.employees.length; i++){
		if($rootScope.employees[i].userId == id){
			$scope.employee = $rootScope.employees[i];
			
			$scope.uid = $scope.employee.userId;
			$scope.fname = $scope.employee.firstName;
			$scope.lname = $scope.employee.lastName;
			$scope.ecode = $scope.employee.employeeCode;
			$scope.region = $scope.employee.region;
			$scope.number = $scope.employee.phoneNumber;
			$scope.email = $scope.employee.emailAddress;
		}
	}
	$scope.submit =function(){
		for(i=0; i< $rootScope.employees.length; i++){
			if($rootScope.employees[i].userId == id){
				$rootScope.employees[i].userId = $scope.uid;
				$rootScope.employees[i].firstName = $scope.fname;
				$rootScope.employees[i].lastName = $scope.lname;
				$rootScope.employees[i].preferredFullName = $scope.fname +' '+$scope.lname;
				$rootScope.employees[i].employeeCode = $scope.ecode;
				$rootScope.employees[i].region = $scope.region;
				$rootScope.employees[i].phoneNumber = $scope.number;
				$rootScope.employees[i].emailAddress = $scope.email;
				console.log($rootScope.employees[i]);
			}
		}
		$location.path('/home');
	}
});