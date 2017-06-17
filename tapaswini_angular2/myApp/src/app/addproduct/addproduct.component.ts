import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers : [ProductService]
})
export class AddproductComponent implements OnInit {
private id : number = 112;	
private name : string = 'Apple';
private cost : number = 129;
  constructor(private x : ProductService) { }//dependency injection
  
  addProduct(){
	  this.x.addProduct({id : 12,name : 'refrigerator',cost : 12300});
  }

  ngOnInit() {
  }

}
