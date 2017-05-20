import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-template-approach',
  templateUrl: './template-approach.component.html',
  styleUrls: ['./template-approach.component.css']
})
export class TemplateApproachComponent implements OnInit {

  constructor() { }
@ViewChild('frm')  fm : FormGroup;
  ngOnInit() {
  }
  
  //saveRecord(fm  : NgForm){
	  saveRecord(){
	  console.log(this.fm)
	  console.log(this.fm.value.first_name)
  }
  
  clearAll(){
	  this.fm.reset();
  }

}
