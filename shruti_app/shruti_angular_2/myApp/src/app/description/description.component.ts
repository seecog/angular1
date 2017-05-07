import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
@ViewChild('f') frm : NgForm;

  constructor() { }
private employee = {'first_name':'Mohan',roll : 47};
  ngOnInit() {
  }
  
  saveRecord(){
	  console.log(this.frm)
  }

}
