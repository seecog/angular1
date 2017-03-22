import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
private switch = false;
private items=['Apple','Banana','PineApple','Guava'];
private value = 1000;
customer = {
fnm : 'Mohan',
lnm : 'Kumar'
}
marks : string[] = [];
@Output() clicker=new EventEmitter<string>();
show(){
this.clicker.emit('All is well');
}


  constructor() { }

  ngOnInit() {
  for(let i=0;i<=10;i++)
  {
  this.marks.push('The record is '+i)
  }
  console.log('the marks is ')
  console.log(this.marks)
  }
  
  myswitch(){
  this.switch = !this.switch;
  }

}
