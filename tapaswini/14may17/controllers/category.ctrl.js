angular.module('myApp').controller('categoryController',function($scope,$http,$routeParams){
	var id=$routeParams.id;
	$scope.fetch_cat=function(){
		$http.get('https://onlineshopping-53fb9.firebaseio.com/category.json').then(function(res){
			console.log('category Details fetched successfully');
			$scope.catdet=res.data;
		}).catch(function(err){
			console.log(err);
		});   
	}
	$scope.del_cat=function(){
		console.log('delcat'+id);
	}
});      