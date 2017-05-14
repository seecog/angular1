import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm,FormGroup} from  '@angular/forms';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }
@ViewChild('frm') fm : FormGroup;
  ngOnInit() {
  }
  saveRecord(){
  console.log(this.fm.value);
 console.log(this.fm.value.first_name);
  }
 /* saveRecord(fm : NgForm){
  console.log(fm)
  }*/

}
