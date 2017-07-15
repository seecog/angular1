import { Component, OnInit } from '@angular/core';
import {Movie} from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
private moviesList : any[];
private search : string;
private searchList : any[];
private moviesTheatre : any[];
  constructor(private movie : Movie) { }

  ngOnInit() {
	  this.movie.getPopularMovies().subscribe(
	  (data)=>{
		  this.moviesList  = data.results;
		  
	  },
	  (error)=>console.log(error)
	  );
	  
	  this.movie.runningMovies().subscribe(
	  (data)=>{
		  this.moviesTheatre  = data.results;
		  
	  },
	  (error)=>console.log(error)
	  );
	  
  }
  
  searchMovies(){
	
	this.movie.searchMovies(this.search).subscribe(
	(data)=>{
		console.log('the search movies are ')
		this.searchList = data.results;
	},
	(error)=>console.log(error)
	)
	  
  }

}
