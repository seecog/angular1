import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
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
		  password : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)])
	  });
  }
  
  register(){
	  console.log(this.signUp)
  }

}
