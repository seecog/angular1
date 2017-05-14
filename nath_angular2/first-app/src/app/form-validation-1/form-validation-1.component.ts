import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-validation-1',
  templateUrl: './form-validation-1.component.html',
  styleUrls: ['./form-validation-1.component.css']
})
export class FormValidation1Component implements OnInit {
@ViewChild('f') signUp : NgForm;;
genders = ['male','female'];
  constructor() { }

  ngOnInit() {
  }
addRecord(form : NgForm){
	console.log(this.signUp.value.userData.username);
	this.signUp.reset();
	//alert('add record');
}
}
