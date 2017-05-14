import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-form-validation-reactive',
  templateUrl: './form-validation-reactive.component.html',
  styleUrls: ['./form-validation-reactive.component.css']
})
export class FormValidationReactiveComponent implements OnInit {
genders = ['male','female'];
  constructor() { }
signUp : FormGroup;
  ngOnInit() {
	  this.signUp = new FormGroup({
		  'username' : new FormControl(null,Validators.required),//First value is the field value
		  'email' : new FormControl(null,Validators.compose([Validators.required])),
		  'gender' : new FormControl('male'),
		  'hobbies' : new FormArray([])
	  });
  }
  
  addRecord(){	  
	  console.log(this.signUp);
  }
  
  addHobby(){
	  const control = new FormControl(null,Validators.required);
	  (<FormArray>this.signUp.get('hobbies')).push(control)
  }

}
