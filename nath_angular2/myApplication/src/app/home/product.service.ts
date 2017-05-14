import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './product.model';
@Injectable()
export class ProductService{
	
	constructor(private http : Http){		
		
	}
	addProduct(data : Product){		
	return	this.http.post('https://school-48cb3.firebaseio.com/products.json',data)
	}
	getProducts(){
		
	return this.http.get('https://school-48cb3.firebaseio.com/products.json');
	}
	
	getProduct(id){
		return this.http.get('https://school-48cb3.firebaseio.com/products/'+id+'.json');
	}
}