angular.module('myApp').controller('ProductsController',function($routeParams,$scope,$http){
	var id = $routeParams.id;
	$scope.id = id;
	$http.get('https://onlineshopping-53fb9.firebaseio.com/category/'+id+'.json').then(function(res){
			console.log('Fetched Successfully');
			$scope.products=res.data;
		}).catch(function(err){
			console.log(err);
		});
	

});