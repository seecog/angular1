import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Response} from '@angular/http';
import {Product} from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductService]
})
export class ProductsComponent implements OnInit {
private products : any[] = [];
  constructor(private productService : ProductService) { }

  
  getProducts(){
	  this.productService.getProducts().subscribe(
	  (data : Response)=>{
		  const productJson = data.json();
		  
		  
		  this.products=Object.keys(productJson).map(function(key){return {data : productJson[key], keyVal : key}
		  
		  });
		  
		  console.log(this.products)
		  
	  },
	  (error)=>console.log(error)
	  )
  }
  
  ngOnInit() {
	  this.getProducts();
  }
  
  deleteProduct(id){
	  this.productService.deleteProduct(id).subscribe(
	  (data : Response)=>{
		  this.getProducts();
	  },
	  (error)=>console.log(error)
	  )
  }
  

}
