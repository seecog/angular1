import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from './product.service';
import {Product} from './product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductService]
})
export class ProductsComponent implements OnInit {
private addProductForm : FormGroup;
private productArray : Product[];
private btn_stt = 'add';
  constructor(private productService : ProductService) {
	  this.getproducts();
  }

  ngOnInit() {
	  this.addProductForm = new FormGroup({
		  product_name : new FormControl(null),
		  product_cost : new FormControl(null)
		  
	  });
  }
  addProduct(){
	  this.productService.addProduct(this.addProductForm.value);	  
	  this.getproducts();
  }
  
   
  getproducts = function(){
	  this.productArray = this.productService.getProducts();
	  console.log('the data is ')
	  console.log(this.productArray)
  }
  
  deleteProduct(product){
	 this.productService.deleteProduct(product);
	 this.getproducts();
  }
  
  updateProduct(product){
	  this.addProductForm = new FormGroup({
		  product_name : new FormControl(product.product_name),
		  product_cost : new FormControl(product.product_cost)
		  
	  });
	  this.btn_stt = 'update';
  }
  
  updateProductSave(){
	  this.productService.updateProduct(this.addProductForm.value);
	  this.getproducts();
  }
 

}
