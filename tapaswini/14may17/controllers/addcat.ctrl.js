angular.module('myApp').controller('addCatController',function($scope,$http,$location){
	console.log('addcat');
	$scope.add_cat=function(){
		$http.post('https://onlineshopping-53fb9.firebaseio.com/category.json',$scope.cat).then(function(res){
			console.log('category Added Successfully');
			$location.path('/category');
		}).catch(function(err){
			console.log(err)
		});
	}
})