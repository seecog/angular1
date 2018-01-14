import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactiveapp',
  templateUrl: './reactiveapp.component.html',
  styleUrls: ['./reactiveapp.component.css']
})
export class ReactiveappComponent implements OnInit {
private  signUp : FormGroup;
private patt : any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  constructor() { }

  ngOnInit() {
	  this.signUp = new FormGroup({
		  nm : new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
		  em : new FormControl(null,[Validators.required,Validators.pattern(this.patt)])
	  })
  }

}
