import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-validation-2',
  templateUrl: './form-validation-2.component.html',
  styleUrls: ['./form-validation-2.component.css']
})
export class FormValidation2Component implements OnInit {
plan : string = '2';
@ViewChild('f') signIn : NgForm; 
  constructor() { }

  ngOnInit() {
  }
  register()
  {
	  console.log(this.signIn.value.email);
	  console.log(this.signIn.value.plan);
	  console.log(this.signIn.value.password)
  }
}
