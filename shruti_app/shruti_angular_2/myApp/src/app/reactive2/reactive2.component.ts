import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component implements OnInit {


private registerForm  : FormGroup;
  constructor() { }

  ngOnInit() {
	  this.registerForm = new FormGroup({
		  first_name : new FormControl(null,[
		  Validators.required,
		  Validators.minLength(3),
		  Validators.maxLength(20)
		  ]),
		  last_name : new FormControl(null,[
		  Validators.required,
		  Validators.minLength(3)
		  ]),
		  email : new FormControl(null,[
		  Validators.required,
		  Validators.pattern('[A-Za-z]{3}')		  
		  ])
	  });
  }
  
  saveRecord(){
	  console.log(this.registerForm.value)
	  
  }

}
