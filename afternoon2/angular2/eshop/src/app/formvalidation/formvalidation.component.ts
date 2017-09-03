import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
@ViewChild('f') login : NgForm;
  constructor() { }

  ngOnInit() {
  }

  save(frm : NgForm){
	  console.log(frm)
  }
  save2(){
	  console.log(this.login)
  }
  
}
