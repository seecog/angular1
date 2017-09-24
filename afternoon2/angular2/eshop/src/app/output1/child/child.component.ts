import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() checkclick = new EventEmitter<Number>();
private a : Number = 100;
  constructor() { }

  ngOnInit() {
  }
  
  fire(){
	  this.checkclick.emit(this.a)
  }

}
