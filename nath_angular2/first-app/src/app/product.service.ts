import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './product.model';
@Injectable()
export class ProductService
{
	
	constructor(private http : Http){
		
	}
	
	saveProduct(product : Product){
		console.log(product)
		return this.http.post('https://school-48cb3.firebaseio.com/myproducts.json',product);
	}
	
	deleteProduct(id){
	return this.http.delete('https://school-48cb3.firebaseio.com/myproducts/'+id+'.json');	
	}
	
	updateProduct(product : Product , id : string){
		console.log('the service key is '+id)
		console.log(JSON.stringify(product))
		return this.http.put('https://school-48cb3.firebaseio.com/myproducts/'+id+'.json',product);
	}
	
	getProducts(){
		return this.http.get('https://school-48cb3.firebaseio.com/myproducts.json');
	}
	
	getProduct(id){
		return this.http.get('https://school-48cb3.firebaseio.com/myproducts/'+id+'.json');
	}
	
}