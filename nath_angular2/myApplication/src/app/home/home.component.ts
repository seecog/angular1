import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from './product.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ProductService]
})
export class HomeComponent implements OnInit {
private addProductForm : FormGroup;
  constructor(private productSevice : ProductService,private router : Router) { }

  ngOnInit() {
	  this.addProductForm = new FormGroup({
		  product_name : new FormControl(null),
		  product_cost : new FormControl(null),
		  product_img : new FormControl(null)
	  });
  }
  
  addProduct(){
	  this.productSevice.addProduct(this.addProductForm.value).subscribe(
	  (data : Response)=>{
		  this.router.navigate(['/users']);
	  },
	  (error)=>console.log(error)
	  );
  }

}
