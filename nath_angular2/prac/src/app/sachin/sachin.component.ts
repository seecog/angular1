import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sachin',
  templateUrl: './sachin.component.html',
  styleUrls: ['./sachin.component.css']
})
export class SachinComponent implements OnInit {
  first_name = 'sachin';
  last_name = 'tendulkar';
  age = 42
  not = 900;
  constructor() { }

  ngOnInit() {
  }

}
