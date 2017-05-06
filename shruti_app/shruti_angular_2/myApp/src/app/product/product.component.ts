import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products = ['Product 1','Product 2','Product 3'];
  constructor() { }

  ngOnInit() {
  }

}
