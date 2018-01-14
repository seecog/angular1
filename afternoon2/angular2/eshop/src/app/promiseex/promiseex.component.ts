import { Component, OnInit } from '@angular/core';
import {Observable,Observer} from 'rxjs/rx';
@Component({
  selector: 'app-promiseex',
  templateUrl: './promiseex.component.html',
  styleUrls: ['./promiseex.component.css']
})
export class PromiseexComponent implements OnInit {
private a : Number = 10;
private sa : Number = 5000;
  constructor() { }

  ngOnInit() {
	  this.add(1,6).then(function(res){
		  console.log('The response is '+res)
		  
	  }).catch(function(error){
		 console.log('the error is ')
		 console.log(error)
	  });
	  
	  this.showman().subscribe(
	  (res)=>{
		  console.log(res)
	  },
	  (error)=>{
		  console.log(error)
	  }
	  )
  }
  
  add(a,b){
	var x =  new Promise(function(resolve , reject){
		setTimeout(function(){
	reject('Something problem')
		},5000);
	  });
	  return x;
  }
  
  showman(){
	  var xy = new Observable(function(o : Observer<Number>){
		  
		  setTimeout(function(){
			  o.next(100)
		  },2000);
		  
		  setTimeout(function(){
			  o.next(107)
		  },2000);
		  
		  setTimeout(function(){
			  o.next(108)
		  },2000);
		  setTimeout(function(){
			  o.next(207)
		  },2000);
		  
		  setTimeout(function(){
			  o.complete();
		  },2000);
		  setTimeout(function(){
			  o.next(601)
		  },2000);
	  })
	  return xy;
  }

}






