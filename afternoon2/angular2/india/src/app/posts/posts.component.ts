import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
private posts : any[];
  constructor(private http : Http) { }

  ngOnInit() {
	  
	  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
	  (res : Response)=>{
		  this.posts = res.json();
	  },
	  (error)=>{
		  console.log(error)
	  }
	  )
	  
  }

}
