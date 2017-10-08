angular.module('movieDirectory')
.service('MovieService',function($http,$q){
	
	this.getPopularMovies = function(){
		var obj = $q.defer();
		$http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8301a21598f8b45668d5711a814f01f6').then(function(res){
			
			obj.resolve(res.data.results)
			
		}).catch(function(err){
			
			obj.reject(err);
			
		});
		return obj.promise;
	}
	
	this.getMovie = function(id){
		var obj = $q.defer();
		$http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=8301a21598f8b45668d5711a814f01f6').then(function(res){
			
			obj.resolve(res.data)
			
		}).catch(function(err){
			
			obj.reject(err);
			
		});
		return obj.promise;
	}
	
	
});