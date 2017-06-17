export class ProductService{
	private products : any = [
	{id : 1,name : 'Mango',cost : 120},
	{id : 1,name : 'Litchi',cost : 130}
	];
	getProducts(){
		return this.products;
	}
	
	addProduct(product : any){
		console.log('Inside the service')
	}
	
	deleteProduct(){
		
		
	}
	
	
}