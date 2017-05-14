angular.module('myApp').controller('addcategoryController',function($scope,$http,$location){
console.log('REsg');	
	$scope.add_cat=function(){
		$http.post('https://shopping-656e6.firebaseio.com/categories.json',$scope.categ).then(function(res){
			console.log('Added Successfully')
			$location.path('/category');
		}).catch(function(err){
			console.log(err);
		});
	}
});