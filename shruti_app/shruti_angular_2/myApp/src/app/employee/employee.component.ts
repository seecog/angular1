import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template : `
  <h1>Employee Detail</h1>
  <img src="{{imgdept}}" width=200 height=200 align="left"> 
  <h2>First Name : {{first_name}}</h2>
  <p>last Name : {{last_name}}</p>
  <p>Department : {{dept}}</p>
  <p>salary : {{sal}}</p>
  <p>
  <input [value]="first_name">
  
  </p>
  `,
  styles: [`
  h1{
	  color : red
	  
  }
  h2{
	  color : green
  }
  `]
  
})
export class EmployeeComponent {

private first_name : string = 'Mohan';
private last_name : string = 'kumar';
private dept : string = 'Aeronautics';
private imgdept : string = 'http://mdot.ms.gov/portal/divisions/aeronautics/images/header.jpg';
private sal : number = 100000000;

show(){
	alert('I am inside the component '+this.first_name)
}

  constructor() { }

}
