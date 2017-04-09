angular.module('myApp').controller('Registercontroller',function($scope,$rootScope,Authentication){
	
    $scope.loadStt = false;
	$scope.registerUser = function(){
		$scope.loadStt = true;
		    Authentication.register({first_name : $scope.first_name,last_name : $scope.last_name,email : $scope.email,password : $scope.password,img : $scope.img});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.email = '';
			$scope.password = '';
			$rootScope.msg = "You are succussfully registered !";
			$scope.loadStt = false;
			
		}
});