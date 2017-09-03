import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
@ViewChild('f') regi : NgForm;

private empArr : any[]=[
{
		  name : 'Mohan',
		  email : 'mohan@gmail.com',
		  contact : '77223232',
		  gender : 'm'
		  
	  }
];
  constructor() { }

  ngOnInit() {
  }
  
  save(){
	  var data = {
		  name : this.regi.value.nm,
		  email : this.regi.value.em,
		  contact : this.regi.value.contact,
		  gender : this.regi.value.gen
		  
	  };
	  this.empArr.push(data)
	  this.regi.reset(); // To reset the form
  }

}
