import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname = 'Mohan kumar';
  lastName = "gupta";
  age = 10;
  city = 'Mumbai';
  languages = ['Hindi','English','Tamil','Telugu'];
}
