import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
/*private id : string;
private product_name : string;
private product_cost : string;*/
private btn_stt : string = 'save';
private product : any = {};
//initialize product array start
private products : any[] =[
{
	id : 1,
	product_name : 'Apple',
	product_cost : 200
	
},
{
	id : 2,
	product_name : 'Banana',
	product_cost : 100
	
},
];
//initialize product array end
  constructor() { }

  ngOnInit() {
  }
  
  saveProduct(){
	  this.products.push(this.product)
  }
  
  deleteProduct(product : any){
	  if(confirm('want to delete')){
	  this.products.splice(product,1)
	  }
  }
  
  updateProduct(){
	  for(let i =0;i<this.products.length;i++){
		  if(this.products[i].id==this.product.id)
		  {
			  this.products[i] = this.product;
		  }
	  }
	  this.product = {};
  }
  
  editProduct(x : any){
	  this.product = x;
	  this.btn_stt = 'update'
  }

}
