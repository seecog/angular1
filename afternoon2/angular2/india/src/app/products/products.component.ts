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

{name : 'Apple',cost : 300},
{name : 'Banana',cost : 200},
{name : 'Papaya',cost : 100}
];

save(){
	var newProduct = this.product;
	this.products.push(newProduct);
	this.product = {};
}

delProduct(x){
	console.log(x)
this.products.splice(x,1);
}

  constructor() { }

  ngOnInit() {
  }
}
