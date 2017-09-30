import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
@Input() mobileinfo : any;
@Output() mobileclick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  fire(){
	  this.mobileclick.emit(this.mobileinfo)
  }

  
}
