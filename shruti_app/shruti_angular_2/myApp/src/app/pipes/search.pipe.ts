import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
	name : 'filter',
    pure : false
})
export class FilterPipe implements PipeTransform{
	
	transform(products : any,key : string){
		if(products.length==0)
		{
			return products;
		}
		var productArr = [];
		for(var i = 0;i<products.length;i++){			
			if(products[i].status==key)
			{
				productArr.push(products[i])
			}
		}
		return productArr;
	}
	
	
	
	
}