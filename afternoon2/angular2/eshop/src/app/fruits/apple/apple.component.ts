import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
@Input() rate : String;
@Input() num : Number;
  constructor() { }

  ngOnInit() {
	  console.log('The rate is '+this.rate)
	  console.log('The num is '+this.num)
  }

}
