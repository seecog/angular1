import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../services/calculator.service';
import {TriangleService} from '../services/triangle.service';
import {SalaryService} from '../services/salary.service';
import {Mysal} from '../services/mysal.service';
@Component({
  selector: 'app-calctest',
  templateUrl: './calctest.component.html',
  styleUrls: ['./calctest.component.css']
})
export class CalctestComponent implements OnInit {
private n : number = 10;
private r : number = 20;
  constructor(private calc :  CalculatorService,private tri : TriangleService,private sal : SalaryService,private mysal : Mysal) { }

  ngOnInit() {
	 /* var ans1 = this.calc.add(11,12)
	  console.log('the sum is '+ans1)
	  var ans2 = this.calc.subtract(10,2);
	  console.log('The subtract is '+ans2)*/
	  
	  var ans = this.mysal.getSalary(10000)
	  console.log('te salary is '+ans)
	 // console.log(this.sal.grossSalary(12000))
  }

}
