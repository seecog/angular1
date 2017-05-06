angular.module('myApp').controller('ViewproductController',function($scope,$rootScope,$location,$routeParams){

var id = $routeParams.id;
$scope.product = $rootScope.products[id];
console.log('The id is '+id)
$location.path('/');
});
