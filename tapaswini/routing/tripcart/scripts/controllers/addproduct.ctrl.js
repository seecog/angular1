angular.module('myApp').controller('AddproductController',function($scope,$rootScope,$location){

$scope.addProduct = function(){
	$scope.product.posted = new Date();
	$rootScope.products.push($scope.product);
	$location.path('#');
}

});
