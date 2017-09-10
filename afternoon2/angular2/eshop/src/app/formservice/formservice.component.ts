import { Component, OnInit,ViewChild } from '@angular/core';
import {CalculatorService} from '../services/calculator.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-formservice',
  templateUrl: './formservice.component.html',
  styleUrls: ['./formservice.component.css']
})
export class FormserviceComponent implements OnInit {
private ans : Number = 0;
 @ViewChild('f') addfrm : NgForm;

  constructor(private x : CalculatorService) { }

  ngOnInit() {
	 
  }
  
  addNumbers(){
	  var a = parseInt(this.addfrm.value.fno);
	  var b = parseInt(this.addfrm.value.sno);
	  this.ans = this.x.add(a,b)
	  
  }

}
