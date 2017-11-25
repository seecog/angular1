import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
private products : any[] = [
{name : 'Refrigerator',pic : '1.jpg',cost : 15000,des : 'Very cooling effect'},
{name : 'Television',pic : '2.jpg',cost : 18000,des : 'saktiman'}
];
  constructor() { }
  
  getProducts(){
	  return this.products;	  
  }
  addProduct(product : any){
	  this.products.push(product)
  }
  removeProduct(id){
	  this.products.splice(id,1)
  }

}
