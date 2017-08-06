import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {
private a : number = 10;
private b : number = 20;
  constructor() { }

  ngOnInit() {
  }

  subtractNum(){
	  var ans = this.a - this.b;
	  console.log('The subtraction is '+ans)
  }
  
}
