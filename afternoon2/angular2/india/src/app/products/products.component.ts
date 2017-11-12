import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

/*private id : Number ;
private name : String ;
private cost : Number ;*/
private product : any = {};
private products : any[] = [

{id : 1,name : 'Apple',cost : 300},
{id : 2,name : 'Banana',cost : 200},
{id : 3,name : 'Papaya',cost : 100}
];

save(){
	var newProduct = this.product;
	this.products.push(newProduct);
	this.product = {};
}

  constructor() { }

  ngOnInit() {
  }
}
