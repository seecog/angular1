angular.module('movieApp').service('MovieService',function($http,$q){
	this.getPopularMovies=function(){
		var obj=$q.defer();
		$http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc').then(function(res){
			console.log('The response is ',res)
			obj.resolve(res.data);
		})
		.catch(function(err){
			console.log('the error is ',err)
		})
		return obj;
	}
})