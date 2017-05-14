import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import {Response} from '@angular/http';
import {Product} from '../product.model';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
  providers : [ProductService]
})
export class EditproductComponent implements OnInit {
private id : string;
private product : Product;
private editProductForm : FormGroup;
  constructor(private rout : ActivatedRoute,private productService : ProductService,private router : Router) { }

  ngOnInit() {
	  //var id = this.route.snapshot.params['id'];
	  const id = this.rout.snapshot.params['id'];
	  this.id = id;
	  this.productService.getProduct(id).subscribe(
	  (data : Response)=>{
		  this.product=data.json();
		  this.editProductForm = new FormGroup({
			  product_name : new FormControl(this.product.product_name),
			  product_cost : new FormControl(this.product.product_cost)
		  });
	  },
	  (error)=>console.log(error)
	  )
  }
  
  updateProduct(){
	  this.productService.updateProduct(this.editProductForm.value,this.id).subscribe(
	  (data : Response)=>{
		  this.router.navigate(['/products'])
	  },
	  (error)=>console.log(error)
	  );
  }

}
