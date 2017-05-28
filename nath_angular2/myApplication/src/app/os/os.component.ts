import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  const myNumbers = Observable.interval(1000)
	  myNumbers.subscribe(
	  (myNum : number)=>{
		  console.log('the number is '+myNum)
		  
	  },
	  (error)=>console.log(error)
	  );
  }

}
