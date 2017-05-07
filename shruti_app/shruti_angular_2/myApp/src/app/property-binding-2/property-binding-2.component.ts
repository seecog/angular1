import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-2',
  templateUrl: './property-binding-2.component.html',
  styleUrls: ['./property-binding-2.component.css']
})
export class PropertyBinding2Component implements OnInit {
private first_name : string="Mohan";
private last_name : string="kumar";

private a : string ='0';
private b : string ='0';
private sum : number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  calculate(){
	  this.sum = parseInt(this.a)+parseInt(this.b);
	  
  }

}
