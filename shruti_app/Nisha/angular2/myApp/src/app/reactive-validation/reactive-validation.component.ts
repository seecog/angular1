import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup,FormControl,Validators} from  '@angular/forms';
@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {
private signUp : FormGroup;
  constructor() { }

  ngOnInit() {
	this.signUp = new FormGroup({
		first_name : new FormControl(null,[
		Validators.required,
		Validators.minLength(3),
		Validators.maxLength(10),
		]),
		last_name : new FormControl(null,[
		Validators.required,
		Validators.minLength(3),
		Validators.maxLength(10),
		]),
	});
  }
  saveRecord(){
	console.log(this.signUp);
  }

}
