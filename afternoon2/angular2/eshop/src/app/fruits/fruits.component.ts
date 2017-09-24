import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
private rt : String;
private a : Number = 10;
  constructor() { }

  ngOnInit() {
	  this.rt = '200';
  }

}
