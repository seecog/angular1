import { Component } from '@angular/core';
import {Movie} from './movie/movie.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private movie : Movie;
  showMoviewDetail(movie : Movie){
  this.movie = movie;
  }
}
