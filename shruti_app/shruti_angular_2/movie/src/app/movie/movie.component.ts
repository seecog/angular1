import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
private mov : any;
  constructor(private x : ActivatedRoute,private movie : Movie) { }

  ngOnInit() {
	  this.x.params.subscribe((params)=>{
		  let id = params['id']
		  this.movie.getMovie(id).subscribe(
		  (data)=>{
			  this.mov = data;
			  
		  },
		  (error)=>console.log(error)
		  )
	  })
  }

}
