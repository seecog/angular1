import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {CalculatorService} from './calculator.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers : [CalculatorService]
})
export class AddComponent implements OnInit {
private addForm : FormGroup;
  constructor(private calculatorService : CalculatorService) { }

  ngOnInit() {
	  this.addForm = new FormGroup({
		  a : new FormControl(null),
		  b : new FormControl(null)
		  
	  })
  }
  
  addNum(){
	  var ans = this.calculatorService.add(parseInt(this.addForm.value.a),parseInt(this.addForm.value.b));
	  alert('The sum is '+ans)
  }

}
