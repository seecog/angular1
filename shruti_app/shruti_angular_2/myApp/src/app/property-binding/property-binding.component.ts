import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Emp} from './employee.model';
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
private first_name : string = 'Sohan';
private stt : boolean = true;
private myInfo : string ='I am an indian';
//private employee : Emp = new Emp({first_name : 'rohit',last_name : 'kumar'});
@Input() email : string = '';
@Input() last_name : string ='';
@Output() clickPankaj = new EventEmitter<string>();
@Output() employedetail = new EventEmitter<any>();
  constructor() {
//this.clickPankaj.emit('I know banglore city..');
  }
  
  show(){
	  alert('India')
  }
  
  showNow(){
	  //this.clickPankaj.emit('I know banglore city..');
	  this.employedetail.emit({first_name : 'rohit',last_name : 'kumar'});
  }

}
