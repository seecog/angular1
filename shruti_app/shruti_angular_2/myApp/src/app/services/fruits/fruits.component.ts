import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from './fruit.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  providers : [ProductService]
})
export class FruitsComponent implements OnInit {
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
	  this.productService.addProduct(this.addProductForm.value).subscribe(
	  (res : Response)=>{
		  console.log('The data is ')
		  console.log(res)
	  },
	  (error)=>console.log(error)
	  )	  
	  this.getproducts();
  }
  
   
  getproducts = function(){
	  this.productService.getProducts().subscribe(
	  (res : Response)=>{
		  this.productArray = res.json()
console.log('The arra ys is ')		  
console.log(JSON.stringify(this.productArray))
	  },
	  (error)=>console.log(error)
	  )
	  
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
