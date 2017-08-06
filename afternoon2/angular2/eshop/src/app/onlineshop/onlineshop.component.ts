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
product_cost : 120,
contact : [
{type : 'Mobile',value : '747787423'},
{type : 'Email',value : 'pankaj.7613@gmail.com'}

]	
},
{
id : 2,
product_name : 'Banana',
product_cost : 65,
contact : [
{type : 'Mobile',value : '745787423'},
{type : 'Email',value : 'sohan.7613@gmail.com'}

]
},
{
id : 3,
product_name : 'Pineapple',
product_cost : 300,
contact : [
{type : 'Mobile',value : '743387423'},
{type : 'Email',value : 'rohan.7613@gmail.com'}

]	
}

];
  constructor() { }

  ngOnInit() {
  }
 
  addProduct(){
	this.products.push(this.product)
	this.product = {};
  }
  
  updateProduct(){
	  
	  for(let i =0;i<this.products.length;i++){
		  
		  if(this.product.id == this.products[i].id)
		  {
			  this.products[i] = this.product;
		  }
		  
	  }
	  
  }
  
  deleteDoctor(x : any){
	  
	  for(let i =0;i<this.products.length;i++){
		  
		  if(x.id == this.products[i].id)
		  {
			  
			  this.products.splice(i,1)
		  }
		  
	  }
	  
  }
  
  editProduct(product : any){
	  this.product = product;
  }

}
