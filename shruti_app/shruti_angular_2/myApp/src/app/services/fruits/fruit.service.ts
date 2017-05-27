import {Product} from './product.model'
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductService{
	
	constructor(private http : Http){}
	
	private products : Product[] = [];
	
	addProduct(product : Product){
		console.log('The fruit is')
		console.log(product)
		return this.http.post('https://books-ad908.firebaseio.com/fruits.json',product);		
	}
	
	getProducts(){
		return this.http.get('https://books-ad908.firebaseio.com/fruits.json')
	}
	
	deleteProduct(key){
		 this.http.delete('https://books-ad908.firebaseio.com/fruits/'+key+'.json')
		
	}
	
	
	updateProduct(product){
for(let x of this.products){
		  if(x.product_name == product.product_name){
			  x.product_cost = product.product_cost;
		  }		  
	  }
	}
	
}