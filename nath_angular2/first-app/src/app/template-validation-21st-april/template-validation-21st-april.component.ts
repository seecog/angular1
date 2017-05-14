import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-template-validation-21st-april',
  templateUrl: './template-validation-21st-april.component.html',
  styleUrls: ['./template-validation-21st-april.component.css']
})
export class TemplateValidation21stAprilComponent implements OnInit {
   username : string = 'Mohan';
  private password = '1234';
  private email = 'mohan@gmail.com';
  genders = ['male','female'];
  gender="male";
  @ViewChild('f') signUp : NgForm;
  constructor() { }

  ngOnInit() {
  }
  
  
  register2(){
	  console.log(this.signUp)	  
  }
  
  reset(){
	  alert('reset')
	  this.signUp.reset();
  }

}
