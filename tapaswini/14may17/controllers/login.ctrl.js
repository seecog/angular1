angular.module('myApp').controller('loginController',function($scope,$location){
	console.log("priya");
	$scope.login_check=function(){
		var username=$scope.user_name;
		var password=$scope.password;
		if(username == 'priya' && password == '123456'){
			$location.path('/category');
		}
	}
});