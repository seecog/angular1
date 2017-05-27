import {Product} from './product.model'
export class ProductService{
	
	private products : Product[] = [
	{product_name : 'Kiwi' , product_cost : 400}
	];
	
	addProduct(product : Product){
		this.products.push(product);		
	}
	
	getProducts(){
		return this.products;
	}
	
	deleteProduct(product){
		 for(let x of this.products){
		  if(x.product_name == product.product_name){
			  this.products.splice(product,1);
		  }		  
	  }
		
	}
	
	
	updateProduct(product){
for(let x of this.products){
		  if(x.product_name == product.product_name){
			  x.product_cost = product.product_cost;
		  }		  
	  }
	}
	
}