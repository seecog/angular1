import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Movie} from './movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
@Input()  id : number;

private movies : Movie[] = [
new Movie('How old Are you','Comody','03/05/2015','Kunchako Boban', 'Manju Warier','1500000','1500000','https://upload.wikimedia.org/wikipedia/en/7/72/How_old_are_you.jpg'),

new Movie('Class Mates','Campus','09/08/2014','Prithviraj', 'Kavya Madhavan','800000','800000','http://data1.ibtimes.co.in/cache-img-0-450/en/full/616422/img10-years-classmates.jpg'),

new Movie('Premam','Campus','03/07/2016','Nivin Pauly', 'SaiPallavi','3500000','3500000','http://www.cochintalkies.com/movie-gallery/poster-l/premam-movie-poster-7739.jpg')
];
@Output() movieDetail = new EventEmitter<Movie>();
  constructor() {
  }


  
  showMovie(id){
	  this.movieDetail.emit(this.movies[id]);
	  console.log(this.movies[id].movie_name);
  }

}
