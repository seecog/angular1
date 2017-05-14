import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Movie} from './movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
@Input()  id : string;

private movies : Movie[] = [
new Movie('How old Are you','Comody','03/05/2015','Kunchako Boban', 'Manju Warier','1500000','1500000','http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-recipe25.jpg'),

new Movie('Class Mates','Campus','09/08/2014','Prithviraj', 'Kavya Madhavan','800000','800000','http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-recipe25.jpg'),

new Movie('Premam','Campus','03/07/2016','Nivin Pauly', 'SaiPallavi','3500000','3500000','http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-recipe25.jpg')
];
@Output() movieDetail = new EventEmitter<Movie>();
  constructor() {
  }


  
  showMovie(id){
	  this.movieDetail.emit(this.movies[id]);
  }

}
