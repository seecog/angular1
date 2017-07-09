import { Component, OnInit } from '@angular/core';
import {Movie} from '../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
private moviesList : any[];
  constructor(private movie : Movie) { }

  ngOnInit() {
	  this.movie.getPopularMovies().subscribe(
	  (data)=>{
		  this.moviesList  = data.results;
		  
	  },
	  (error)=>console.log(error)
	  );
	  
  }

}
