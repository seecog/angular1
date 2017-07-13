import { Component, OnInit } from '@angular/core';
import {Salary} from '../services/salary.service';
@Component({
  selector: 'app-ssalary',
  templateUrl: './ssalary.component.html',
  styleUrls: ['./ssalary.component.css'],
  providers : [Salary]
})
export class SsalaryComponent implements OnInit {
private bs : string;
private ans : number;
  constructor(private salary : Salary) { }

  ngOnInit() {
  }
  
  getGross(){
	  //console.log('The value is '+this.bs)
	  this.ans = this.salary.getSalary(this.bs);
	  console.log('The salary is '+this.ans)
  }

}
