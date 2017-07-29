import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class Movie{
	
	constructor(private http : Http){
		
	}
	
	getPopularMovies(){
		
		return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8301a21598f8b45668d5711a814f01f6').map(res=>res.json())
		
	}
	
	searchMovies(search : string){
		return this.http.get('https://api.themoviedb.org/3/search/movie?query='+search+'&api_key=8301a21598f8b45668d5711a814f01f6').map(res=>res.json())
	}
	
	runningMovies(){
		return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-01-15&primary_release_date.lte=2017-07-15&api_key=8301a21598f8b45668d5711a814f01f6').map(res=>res.json())
	}
	
	getMovie(id:string){
		console.log('id is '+id)
		return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=8301a21598f8b45668d5711a814f01f6').map(res=>res.json())
		
	}
		
	
}