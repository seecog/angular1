angular.module('myapp').controller('myController',function($scope,ProductService){
$scope.product = {};
$scope.saveProduct = function(){
ProductService.addProduct($scope.product).then(function(){
alert('Added')
$scope.getProducts();
});
}

$scope.getProducts = function(){
ProductService.getProducts().then(function(res){
$scope.products = res;
})
}

});