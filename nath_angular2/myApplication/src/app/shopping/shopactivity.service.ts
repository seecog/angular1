
import { Product } from './product';

export class ShopactivityService {
private products : Product[] = [];
private product : Product = {name : 'A',cost : '100' , brand : 'ITC'};
  constructor() { }
  
  addProduct(product_name,product_cost,product_brand){
	  //console.log('Inside the service '+name+'-'+cost+' '+brand)
	  this.products.push({name : product_name,cost : product_cost , brand : product_brand})
  }
  
  getProducts(){
	  
	  return this.products;
  }
  
  deleteProduct(product){
	  
	  this.products.splice(product,1);
  }
  
  updateProduct(name,cost,brand){
	  for(var i=0;i<this.products.length;i++){
		 
		  if(this.products[i] == this.product )
		  {
			  alert('found')
		  }
		  else{			  
			  console.log(this.products[i])
			  console.log({name : 'A',cost : '100' , brand : 'ITC'})
			  alert('Inside else')
		  }
		  
	  }
  }
}
