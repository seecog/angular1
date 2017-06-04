import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../home/product.service';
import {Response} from '@angular/http';
import {Product} from '../home/product.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [ProductService]
})
export class UserComponent implements OnInit {
private nm : string='Rocky';
private otnm : string = 'asiiweoph';
  constructor(private route : ActivatedRoute,private productService : ProductService) { }

  ngOnInit() {
	  const id = this.route.snapshot.params['id'];
	  console.log('Id is '+id)
  }

}
