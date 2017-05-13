import { Component , Input} from '@angular/core';
import {picture} from 'app/movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private picture : picture ;

  showSpecificpic(picture : picture){
	  this.picture = picture;
  }

}
