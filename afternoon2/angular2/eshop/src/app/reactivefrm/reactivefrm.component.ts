import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {
private login : FormGroup;
  constructor() { }

  ngOnInit() {
	  this.login = new FormGroup({
		  em : new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20),
		  Validators.pattern('[A-Za-z]{5}')]),
		  pass : new FormControl(null,[Validators.required])
	  })
  }
  //
  
  checklogin(){
	  console.log(this.login)
  }

}
