import { Product } from './product';
export class ProductService {

  private products : Product[] = [];
  addProduct(product : Product)
  {
  this.products.push(product)
  }
  getProduct(){
  console.log(JSON.stringify(this.products));
  return this.products;
  }
}
