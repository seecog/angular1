import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'keyfilter',
pure : false
})
export class KeyfilterPipe implements PipeTransform{
	
	transform(products : any,key : string){
		if(products.length==0)
			return products;
		const productFilterArray = [];
		for(let product of products){
			if(product.status == key)
			{
				productFilterArray.push(product)
			}
			
		}
		return productFilterArray;
	}
	
}