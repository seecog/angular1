import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styles: [`
  .ng-invalid {
  
  border : 1px solid red;
  
  }
  .ng-valid {
  
  border : 1px solid green;
  
  }
  `]
})
export class FormvalidationComponent implements OnInit {

 user = {
 username : 'mohan',
 password : '123233',
 email : 'mohan@gmail.com',
 gender : 'm'
 }

  constructor() { }

  ngOnInit() {
  }

onSubmit(form : NgForm){
alert('Hii')
console.log(form)
}
}
