angular.module('myApp').controller('editcategoryController',function($scope,$http,$routeParams){
	var id=$routeParams.id;
	console.log('edicat'+id);
	$scope.geteditdata=function(){
		$http.get('https://shopping-656e6.firebaseio.com/categories/'+id+'.json').then(function(res){
			$scope.categ=res.data;
		}).catch(function(err){
			console.log(err);
		})
	}
	$scope.edit_cat=function(){
		$http.put('https://shopping-656e6.firebaseio.com/categories/'+id+'.json',$scope.categ).then(function(res){
			console.log('Successfully Edited');
		}).catch(function(err){
			console.log(err);
		})
	}
})