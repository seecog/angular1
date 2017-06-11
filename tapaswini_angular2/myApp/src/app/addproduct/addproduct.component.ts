import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
private name : string = 'Apple';
private cost : number = 129;
  constructor() { }
  
  addProduct(){
	  alert('yes add it')
  }

  ngOnInit() {
  }

}
