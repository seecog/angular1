import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outsideera',
  templateUrl: './outsideera.component.html',
  styleUrls: ['./outsideera.component.css']
})
export class OutsideeraComponent implements OnInit {

@Input('emp_id') id : number = 0;
@Input('emp_name') name : string = '';
@Input('emp_sal') salary : number = 120;
@Output() clicker = new EventEmitter<string>();

getMessage(){

this.clicker.emit('Mohan kumar');

}
  constructor() { }

  ngOnInit() {
  }

}
