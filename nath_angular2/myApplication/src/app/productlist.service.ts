import { Product } from './product';
export class ProductlistService {
  private productlist : Product[] = [];
  saveProduct(id : number,name : string,cost : number){
  this.productlist.push({id : id,name : name,cost : cost});
  console.log('the list is ')
  console.log(this.productlist)
  return this.productlist;
  }

}
