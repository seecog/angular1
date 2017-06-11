import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
private path = './assets/images/sachin.jpg';
  constructor() { }

  ngOnInit() {
	  const myNum = new Observable(observe =>{
		  
		  setTimeout(()=>{
			  observe.next('First Number ');
			  
		  },1000);
		  
		  
		  setTimeout(()=>{
			  observe.next('Second Number ');
			  
		  },2000);
		  
		  setTimeout(()=>{
			  observe.error('My last error');
			  
		  },3000);
		  
		  setTimeout(()=>{
			  observe.complete();
			  
		  },4000);
		  
		  setTimeout(()=>{
			  observe.next('My new action');
			  
		  },5000);
	  });
	  
	  
  
	  
	  myNum.subscribe(
	  (data : number)=>{
		  console.log('The data is '+data)
		  
	  },
	  (error)=>{
		  console.log('The error is '+error)
		  
	  },
	  ()=>console.log('************')
		  
	  
	  )
	  
	  
  }
}
