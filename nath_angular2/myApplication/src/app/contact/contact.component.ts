import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
private first_name : string = 'Mohan';
private last_name : string = 'KUMAR';
private salary : number = 100000;
private key : string = '';
private products : any[] = [
{name : 'Mango',cost : 120 , status : 'active'},
{name : 'Banana',cost : 180 , status : 'active'},
{name : 'Pipneapple',cost : 280 , status : 'inactive'}
];

  constructor() { }

  ngOnInit() {
  }
  
  addProduct(){
	  this.products.push({name : 'Test',cost : 100,status : 'active'});
  }

}
