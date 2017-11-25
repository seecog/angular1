import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-myproductlist',
  templateUrl: './myproductlist.component.html',
  styleUrls: ['./myproductlist.component.css']
})
export class MyproductlistComponent implements OnInit {
private productlist : any[];
private product : any = {};
  constructor(private x : ProductService) { }

  ngOnInit() {
	  this.productlist = this.x.getProducts();
  }
  
  saveProduct(){
	  this.x.addProduct(this.product);
	  this.product = {};
  }
  
  delProduct(id){
	  console.log(id)
	  this.x.removeProduct(id)
  }

}
