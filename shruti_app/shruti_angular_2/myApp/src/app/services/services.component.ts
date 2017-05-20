import { Component, OnInit } from '@angular/core';
import {CalculatorService} from './calculator.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers : [CalculatorService]
})
export class ServicesComponent implements OnInit {

  constructor(private calculatorService : CalculatorService) { 
  
  }

  ngOnInit() {
	  var ans = this.calculatorService.add(1,2)
	  console.log('The sum is '+ans)
  }

}
