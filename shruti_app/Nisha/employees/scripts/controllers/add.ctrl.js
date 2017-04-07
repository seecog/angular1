angular.module('myApp').controller('AddController',function($scope,$location, $rootScope){
	console.log('inside add');
 	$scope.addEmp =function(){
		$rootScope.employees.push({
			empId : $scope.eid,
			firstName : $scope.fnm,
			lastName : $scope.lnm,
			designmation : $scope.desig,
			departmant : $scope.dept,
			age : $scope.age,
			mobile : $scope.mob,
			emailAddress : $scope.em,
			location : $scope.loc
		});
		console.log($rootScope.employees);
		$location.path('/home');
	}
});