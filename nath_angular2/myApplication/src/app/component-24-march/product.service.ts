import { Product } from './product';
export class ProductService {

  private products : product[] = [];
  addProduct(product : Product)
  {
  this.products.push(product)
  }
  getProduct(){
  console.log(JSON.stringify(this.products));
  return this.products;
  }
}
