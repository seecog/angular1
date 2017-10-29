import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
private contacts : any[];
  constructor(private x : Http) { }

  ngOnInit() {
	  
	  this.x.get('https://reqres.in/api/users?page=2').subscribe(
	  (res : Response)=>{
		  let resData = res.json();
		  this.contacts = resData.data;
	  },
	  (error)=>{		  
		  console.log('the error is ')
		  console.log(error)
	  }
	  
	  );
	  
  }

}
