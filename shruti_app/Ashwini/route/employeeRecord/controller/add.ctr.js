angular.module('myApp').controller('addController',function($scope,$rootScope,$location){
	$scope.submit =function(){
		console.log($scope.fname);
		console.log($scope.lname);
		console.log($scope.fname);
		console.log($scope.email);
		console.log($scope.region);
		console.log($scope.number);
		
		console.log($rootScope.employees);
		//$rootScope.employees.push
		$rootScope.employees.push({
			userId : $scope.uid,
			jobTitleName : "IT",
			firstName : $scope.fname,
			lastName : $scope.lname,
			preferredFullName : $scope.fname+''+$scope.lname,
			employeeCode : $scope.ecode,
			region : $scope.region,
			phoneNumber : $scope.number,
			emailAddress : $scope.email
		});
		console.log($rootScope.employees);
		$location.path('/home');
	}
});