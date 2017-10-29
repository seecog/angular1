import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-profiledes',
  templateUrl: './profiledes.component.html',
  styleUrls: ['./profiledes.component.css']
})
export class ProfiledesComponent implements OnInit {
private profiledes : any;
  constructor(private x : ActivatedRoute,private http : Http) { }

  ngOnInit() {
	  
	  this.x.params.subscribe(params=>{
		  console.log(params['id'])	  
		  this.http.get('https://reqres.in/api/users/'+params['id']).subscribe(
		  (res : Response)=>{
			  let resJson = res.json();
			  console.log(resJson.data)
			  this.profiledes = resJson.data;
		  },
		  (error)=>{
			  
			  console.log('The error is ')
			  console.log(error)
		  }
		  
		  );
		  
	  });
	  
  }

}
