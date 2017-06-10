import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private products = ['Product 1','Product 2','Product 3'];
  constructor(private active : ActivatedRoute) { }

  ngOnInit() {
	  let x = this.active.snapshot.params['id']
	  console.log('The id is '+x)
  }

}
