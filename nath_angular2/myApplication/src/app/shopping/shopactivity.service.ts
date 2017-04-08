
import { Product } from './product';

export class ShopactivityService {
private products : Product[] = [];
  constructor() { }
  
  addProduct(product_name,product_cost,product_brand){
	  //console.log('Inside the service '+name+'-'+cost+' '+brand)
	  this.products.push({name : product_name,cost : product_cost , brand : product_brand})
  }
  
  getProducts(){
	  
	  return this.products;
  }

}
