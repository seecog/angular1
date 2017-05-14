angular.module("myApp").controller("categoryController",function($scope,$http){
	console.log('Priya');
	//var id=$routeParams.id;
	$scope.getinfo=function(){
		$http.get('https://shopping-656e6.firebaseio.com/categories.json').then(function(res){
			$scope.cat=res.data;
			}).catch(function(err){
              console.log(err);
			});
	}
	/*$scope.getcatdet=function(){
		$http.get('https://shopping-656e6.firebaseio.com/categories.json').then(function(res){
			console.log("fetched successfully");
			$scope.catrec=res.data;
		}).catch(function(err){
			console.log(err);
		});
	}*/
});
