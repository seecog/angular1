import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ProductService} from '../product.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
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
	  const myNum = new Observable().timer(200);
	  
	  /*const myNum =  new Observable(observer => {
		  
		  setTimeout(()=>{
			  observer.next('First')
		  },1000)
		  
		  setTimeout(()=>{
			  observer.next('Second')
		  },2000)
		  
		  setTimeout(()=>{
			  observer.error('This is kite')
		  },3000)
		  
		  setTimeout(()=>{
			  observer.complete()
		  },4000)
		  
		  setTimeout(()=>{
			  observer.next('Last')
		  },5000)
		  
	  });*/
  myNum.subscribe(
  (data : number)=>{
	  console.log('data is '+data);
	  
  },
  (error)=>console.log('The bacardi error is '+error)
  
  );
	  
	  
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
