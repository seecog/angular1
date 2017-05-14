import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  signUp : FormGroup;
  genders = ['male','female'];
  constructor() { }

  ngOnInit() {
	  this.signUp = new FormGroup({
		  username : new FormControl('Mohan',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
		  password : new FormControl('123'),
		  email : new FormControl('mohan@gmail.com'),
		  gender : new FormControl('male'),
		  hobbies : new FormArray([
		  new FormControl('c',Validators.required),
		  new FormControl('cpp',Validators.required)
		  ])
		  
	  });
  }
  
  register2(){
	  console.log(this.signUp)
  }

}
