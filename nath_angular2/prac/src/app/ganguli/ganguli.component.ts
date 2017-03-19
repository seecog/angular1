import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganguli',
  template: `
  <p>
  Player First Name : {{first_name}}<br>

  Player Last Name : {{last_name}}<br>

  Player age : {{age}}<br>

  Test matches played : {{not}}<br>
</p>
  
  `,
  styles: [`
  p{
color : #cccccc;border : 2px solid blue;
  }
  
  `]
})
export class GanguliComponent implements OnInit {
  first_name = 'Rahul';
  last_name = 'Dravid';
  age = 40;
  not = 70;
  constructor() { }

  ngOnInit() {
  }

}
