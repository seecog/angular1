import { Component, OnInit } from '@angular/core';
import {Calculator} from '../services/calculator.service';
import {Triangle} from '../services/triangle.service';
@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css'],
  providers : [Calculator,Triangle]
})
export class CalculationComponent implements OnInit {
private a : string = '1';
private b : string = '2';
private c : string = '2' ;
  constructor(private calculator : Calculator,private tri : Triangle) { }

  addNumbers(){
	 // var ans = this.calculator.add(this.a,this.b)
	  //console.log('The sum is '+ans)
	  //this.sumvalue = ans;
  }
  
  triArea(){
	  alert('hii');
	 this.tri.area(this.a,this.b,this.c); 
  }
  
  ngOnInit() {
	  
  }

}
