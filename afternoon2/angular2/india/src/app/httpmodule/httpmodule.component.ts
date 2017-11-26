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
	  this.x.get("http://localhost:9001/api/").subscribe(
	  (data : Response)=>{
		  console.log('The data is ')
		  console.log()
		  this.posts = data.json();
		  
	  },
	  (error)=>{
		  console.log("The error is ")
		  console.log(error)
	  }
	  )
  }

}




