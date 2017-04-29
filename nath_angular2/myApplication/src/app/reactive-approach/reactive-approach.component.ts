import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  signUp : FormGroup;
  constructor() { }

  ngOnInit() {
	  
	  this.signUp = new FormGroup({
		  username : new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z]{5}')]),
		  password : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
		  hobbies : new FormArray([
		  new FormControl(null,Validators.required),
		   new FormControl(null,Validators.required),
		  ])
	  });
  }
  
  addHobby(){
	  const ctrl = new FormControl(null,Validators.required);
	  (<FormArray>this.signUp.get('hobbies')).push(ctrl);
	  
  }
  
  removeHobby(i : number){
	  	//  (<FormArray>this.signUp.get('hobbies')).remove(ctrl);
		    (<FormArray>this.signUp.get('hobbies')) .removeAt(i);
		   // const arrayControl = <FormArray>this.signUp.controls['hobbies'];
			//arrayControl.removeAt(i);

  }
  
  register(){
	  console.log(this.signUp)
  }

}
