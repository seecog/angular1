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
	
		
	
}