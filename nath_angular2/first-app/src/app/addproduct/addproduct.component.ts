import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from '../product.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers : [ProductService]
})
export class AddproductComponent implements OnInit {
private addProductForm : FormGroup;
  constructor(private productService: ProductService,private route : Router) { }

  ngOnInit() {
	 this.addProductForm = new FormGroup({
	 product_name : new FormControl(null),
	 product_cost : new FormControl(null)
	 });	  
  }
  
  saveProduct(){
	  
	  this.productService.saveProduct(this.addProductForm.value).subscribe(
	  (data : Response)=>{
		  console.log(data.json())
		  this.route.navigate(['/products']);
	  },
	  (error)=>console.log(error)
	  )
  }

}
