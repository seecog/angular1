import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-httpmodule',
  templateUrl: './httpmodule.component.html',
  styleUrls: ['./httpmodule.component.css']
})
export class HttpmoduleComponent implements OnInit {
private posts : any[];
  constructor(private x : Http) { }

  ngOnInit() {
	  this.x.get("https://jsonplaceholder.typicode.com/posts").subscribe(
	  (data : Response)=>{
		  this.posts = data.json();
		  
	  },
	  (error)=>{
		  console.log("The error is ")
		  console.log(error)
	  }
	  )
  }

}
