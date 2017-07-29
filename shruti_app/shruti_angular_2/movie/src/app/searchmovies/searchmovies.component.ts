import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../services/movies.service';
@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {
private searchList : any[];
  constructor(private x : ActivatedRoute,private movie:Movie) { }

  ngOnInit() {
	  
	  this.x.params.subscribe((params)=>{
		  let search = params['search']
		  this.movie.searchMovies(search).subscribe(
	(data)=>{
		console.log('the search movies are ')
		this.searchList = data.results;
	},
	(error)=>console.log(error)
	)
	  });
  }

}
