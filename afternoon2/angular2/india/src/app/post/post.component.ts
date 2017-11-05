import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
private post : any;
  constructor(private route : ActivatedRoute,private http : Http,private x : Router) { }

  
  third(){
	  
	  this.x.navigate(['/third'])
	  
  }
  
  ngOnInit() {
	  
	  this.route.params.subscribe((params)=>{
		  
		  console.log(params['id'])
		  this.http.get('https://jsonplaceholder.typicode.com/posts/'+params['id']).subscribe(
		  (res : Response)=>{
			 this.post = res.json();		 
		  },
		  (error)=>{
			  console.log(error)			  
		  }
		  
		  )
	  });
	  
  }

}
