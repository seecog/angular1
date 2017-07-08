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
  constructor() { }

  
  ngOnInit() {
	  
  }

}
