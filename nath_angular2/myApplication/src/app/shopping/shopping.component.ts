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
  constructor(private shopactivityService : ShopactivityService) { }
  
  addProduct(){
	  
	  this.shopactivityService.addProduct(this.product_name,this.product_cost,this.product_brand);
	  this.productlist = this.shopactivityService.getProducts();
	  this.product_name = '';
	  this.product_cost = '';
	  this.product_brand = '';
  }

  ngOnInit() {
  }

}
