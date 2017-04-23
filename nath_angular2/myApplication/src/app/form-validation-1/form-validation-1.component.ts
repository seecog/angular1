import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-validation-1',
  templateUrl: './form-validation-1.component.html',
  styleUrls: ['./form-validation-1.component.css']
})
export class FormValidation1Component implements OnInit {

  constructor() { }
  @ViewChild('f') frm : NgForm; 
  ngOnInit() {
  }
  register(){
	  console.log(this.frm.value.username);
	  console.log(this.frm.value.password);
  }

}
