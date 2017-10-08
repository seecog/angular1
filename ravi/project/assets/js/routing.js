angular.module('movieDirectory').config(function($stateProvider){
	
	$stateProvider.state('home',{
		url : '/',
		templateUrl : '../../views/home.html',
		controller : function(MovieService,$scope){
			MovieService.getPopularMovies().then(function(res){
				$scope.popularMovies = res;
				
			}).catch(function(err){
				console.log(err)
				
			});
		}
		
	})
	.state('viewdetail',{
		url : '/viewdetail/:id',
		templateUrl : '../../views/viewmovie.html',
		controller : function(MovieService,$stateParams,$scope){
			var id = $stateParams.id;
			MovieService.getMovie($stateParams.id).then(function(res){
				
				console.log(JSON.stringify(res))
				$scope.movie = res;
				
			}).catch(function(err){
				console.log(err)			
				
			});
			
			
		}
		
	})
	
	
});