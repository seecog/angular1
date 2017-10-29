import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
private profile : any;
  constructor(private y : ActivatedRoute,private http : Http) { }

  ngOnInit() {
	  
	  this.y.params.subscribe(params=>{
		  
		  this.http.get('https://reqres.in/api/users/'+params['id']).subscribe(
		  (res : Response)=>{
			  let p = res.json();
			  this.profile = p.data;
		  },
		  (error)=>{
			  console.log('The error is ')
			  console.log(error)
		  }
		  );
		  
	  })
  }

}
