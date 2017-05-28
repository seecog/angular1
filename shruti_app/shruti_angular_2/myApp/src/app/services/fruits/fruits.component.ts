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
private productArray : Product[] = [];
private btn_stt = 'add';
  constructor(private productService : ProductService) {
	  this.getproducts();
  }

  ngOnInit() {
	  this.addProductForm = new FormGroup({
		  key : new FormControl(null),
		  product_name : new FormControl(null),
		  product_cost : new FormControl(null)
		  
	  });
  }
  
  getproducts = function(){
	  this.productService.getProducts().subscribe(
	  (res : Response)=>{
		 const record  = res.json()
		 const keyArr = Object.keys(record);
		 this.productArray = [];
		 for(var i=0;i<keyArr.length;i++)
		 {
			 this.productArray.push({key : keyArr[i],product_name : record[keyArr[i]].product_name,
			 product_cost : record[keyArr[i]].product_cost})
			 console.log({product_name : record[keyArr[i]].product_name,
			 product_cost : record[keyArr[i]].product_cost})
			
		 }
	  },
	  (error)=>console.log(error)
	  );
  }
  
  
  
  addProduct(){
	  this.productService.addProduct(this.addProductForm.value).subscribe(
	  (res : Response)=>{
		  this.getproducts();
	  },
	  (error)=>console.log(error)
	  )	  
  }
    
  
  deleteProduct(key){
	 this.productService.deleteProduct(key).subscribe(
	 (res : Response)=>{		 
	 this.getproducts();
console.log('Successfully deleted')	 
	 },
	 (error)=>console.log(error)
	 )
  }
  
  updateProduct(product){
	  this.addProductForm = new FormGroup({
		  key : new FormControl(product.key),
		  product_name : new FormControl(product.product_name),
		  product_cost : new FormControl(product.product_cost)
		  
	  });
	  this.btn_stt = 'update';
  }
  
  updateProductSave(){
	  this.productService.updateProduct(this.addProductForm.value).subscribe(
	  (res : Response)=>{		  
	  this.getproducts();		  
	  },
	  (error)=>console.log(error)
	  )
  }
 


}
