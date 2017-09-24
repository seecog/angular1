import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit {
private x : Number;
  constructor() { }

  ngOnInit() {
  }
  
  getData(n : Number){
	this.x = n;  
  }

}
