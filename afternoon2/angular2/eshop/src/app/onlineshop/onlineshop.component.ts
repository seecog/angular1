import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlineshop',
  templateUrl: './onlineshop.component.html',
  styleUrls: ['./onlineshop.component.css']
})
export class OnlineshopComponent implements OnInit {
private product : any ={};
private products : any[]=[
{
id : 1,
product_name : 'Apple',
product_cost : 120	
},
{
id : 2,
product_name : 'Banana',
product_cost : 65
},
{
id : 3,
product_name : 'Pineapple',
product_cost : 300	
}

];
  constructor() { }

  ngOnInit() {
  }
  
  addProduct(){
	this.products.push(this.product)
	this.product = {};
  }

}
