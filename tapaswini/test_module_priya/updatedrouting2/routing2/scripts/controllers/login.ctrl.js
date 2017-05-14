angular.module("myApp").controller("loginController",function($scope,$location){
	$scope.login=function(){
		if($scope.uname=="GOURAV" && $scope.pass=="GOURAV")
		{
			$location.path("/category");
		}
		else{
			alert("invalid username or password")
		}
	}
})