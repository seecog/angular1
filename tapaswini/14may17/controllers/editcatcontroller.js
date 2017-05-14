angular.module('myApp').controller('editcatController',function($scope,$http,$routeParams,$location){
	var id=$routeParams.id;
	console.log(id);
	$scope.showpart_cat=function(){
		$http.get('https://onlineshopping-53fb9.firebaseio.com/category/'+id+'.json').then(function(res){
			console.log('category Details fetched successfully');
			$scope.catpart=res.data;     
		}).catch(function(err){
			console.log(err);
		});
	}  
	$scope.edit_cat=function(){       
		$http({
			method : "PUT",
			url : 'https://onlineshopping-53fb9.firebaseio.com/category/'+id+'.json',
			data : $scope.catpart
		}).then(function(res){
			$location.path('/category');    
		}).then(function(err){
			console.log(err);
		});	
	}   
});