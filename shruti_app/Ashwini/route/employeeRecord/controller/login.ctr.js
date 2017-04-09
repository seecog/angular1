angular.module('myApp').controller('loginController', function($scope,$location){
	
	$scope.login = function(){
		var unm = $scope.unm;
		var pss = $scope.pss;
		console.log(unm);
		console.log(pss);
		if(unm == 'ashwini' && pss == 'ashwini'){
			$location.path('/home');
		}
	}
});