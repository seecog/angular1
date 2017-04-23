angular.module('myApp').controller('HomeController',function($scope,$rootScope){
$scope.sortReverse = false;
$scope.getProducts = function(){
	
	return $rootScope.products;
	
}

});
