angular.module('movieApp').config(function($stateProvider){
console.log('Insde router ')
$stateProvider.state('home',{
	path : '/',
	templateUrl : '../../views/home.html',
	controller : function(MovieService){
		MovieService.getPopularMovies().then(function(res){
		console.log(res)	
		})
		.catch(function(err){
			console.log('The error is')
			console.log(err);
		})
		console.log('Inside the home ')
		
	}
})
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8301a21598f8b45668d5711a814f01f6
})