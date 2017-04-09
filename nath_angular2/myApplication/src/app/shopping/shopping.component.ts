import { Component, OnInit } from '@angular/core';
import { ShopactivityService } from './shopactivity.service';

import { Product } from './product';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers : [ShopactivityService]
  //declarations:[Product]
})
export class ShoppingComponent implements OnInit {
  private product_name : string = '';
  private product_cost : string = '';
  private product_brand : string = '';
  private productlist : Product[] = [];
  private products : Product[]=[];
  private product : Product = {};
  private button_label : string = 'Add Product';
  private i : number = 0;
  constructor(private shopactivityService : ShopactivityService) { }
  
  addProduct(){
	  
	  this.shopactivityService.addProduct(this.product_name,this.product_cost,this.product_brand);
	  this.productlist = this.shopactivityService.getProducts();
	  this.product_name = '';
	  this.product_cost = '';
	  this.product_brand = '';
  }
  
  deleteProduct(product : Product){
	  this.shopactivityService.deleteProduct(product);
	  
  }
  
  editProduct(product){
	  console.log(product)
	  this.product_name = product.name;
	  this.product_cost = product.cost;
	  this.product_brand = product.brand;
	  this.button_label = 'Edit Product';
  }
  
  updateProduct(){
	 this.products = this.shopactivityService.getProducts();
	 for(this.i=0;this.i<this.products.length;this.i++)
	 {
		//
	 }
  }

  ngOnInit() {
  }

}
