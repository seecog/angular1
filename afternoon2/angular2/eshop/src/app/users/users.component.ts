import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private users : any[];
  constructor(private http : Http) { }

  ngOnInit() {
	  
	  this.http.get('https://reqres.in/api/users?page=2').subscribe(
	  (res : Response)=>{
		  let resJson= res.json();
		  this.users = resJson.data;
	  },
	  (error)=>{
		  console.log(error)
	  }
	  
	  
	  )
	  
  }

}
