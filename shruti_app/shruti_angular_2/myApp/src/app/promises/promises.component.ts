import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  this.getrecord().then(function(res){
		  console.log(res)		  
	      console.log('second')
	  }).catch(function(err){
		  console.log('Error is ')
		  console.log(err)
	  });
	  
  }
  
  getrecord(){
	  return new Promise((resolve,reject)=>{
		  
	  setTimeout(()=>{
		 resolve('first')
	  },5000);
	  
	  });
  }

}

