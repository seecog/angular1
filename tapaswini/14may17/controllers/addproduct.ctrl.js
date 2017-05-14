angular.module('myApp').controller('addProductController',function($scope,$routeParams,$http,$location){
	var id=$routeParams.id;
	console.log('id is'+id);
	$scope.product={};
	$scope.add_product=function(){
		console.log($scope.product);
		$http.post('https://onlineshopping-53fb9.firebaseio.com/category/'+id+'/products.json',$scope.product).then(function(res){
			$location.path('/products/'+id);
		}).catch(function(err){
			console.log(err);
		});
	}
});