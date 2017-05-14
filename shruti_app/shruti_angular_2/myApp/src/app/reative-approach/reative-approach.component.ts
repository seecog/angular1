import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reative-approach',
  templateUrl: './reative-approach.component.html',
  styleUrls: ['./reative-approach.component.css']
})
export class ReativeApproachComponent implements OnInit {
private signUp : FormGroup;
  constructor() { }

  ngOnInit() {
	  this.signUp = new FormGroup({
	  first_name : new FormControl(null,[
	  Validators.required,
	  Validators.minLength(3),
	  Validators.maxLength(10),
	  ]),
	  last_name : new FormControl(null),
	  });
  }
  
  saveRecord(){
	  console.log(this.signUp)
  }
}
