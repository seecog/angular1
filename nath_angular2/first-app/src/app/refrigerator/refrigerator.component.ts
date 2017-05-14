import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {
private im : string = 'http://www.thehindu.com/news/national/article18393668.ece/alternates/FREE_660/06THSATELLITE-PG10';
  constructor() { }

  ngOnInit() {
  }

}
