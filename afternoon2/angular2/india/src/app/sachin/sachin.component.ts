import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sachin',
  templateUrl: './sachin.component.html',
  styleUrls: ['./sachin.component.css']
})
export class SachinComponent implements OnInit {

private id : Number = 1;
private name : String = "Sachin Tendulkar";
private age : Number = 21;
private odi : Number = 510;
private img : String = "https://statics.sportskeeda.com/wp-content/uploads/2016/06/sachin-1465043095-800.jpg";
private salary : Number = 1200000;

  constructor() { }

  ngOnInit() {
  }

}

