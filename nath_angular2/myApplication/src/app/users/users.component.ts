import { Component, OnInit } from '@angular/core';
import {ProductService} from '../home/product.service';
import {Response} from '@angular/http';
import {Product} from '../home/product.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers : [ProductService]
})
export class UsersComponent implements OnInit {
private products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit() {
	  this.productService.getProducts().subscribe(
	  (data : Response)=>{
		  const ams = data.json();
		  this.products=Object.keys(ams).map(function(key){return {keyVal : key,data : ams[key]}})		  
	  },
	  (error)=>console.log(error)
	  );
  }

}
