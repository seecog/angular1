import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
	name : 'filter',
    pure : false
})
export class FilterPipe implements PipeTransform{
	
	transform(products : any,key : string){
		
		console.log('The key is '+ key)
		
		if(products.length==0 || key =='')
		{
			console.log('the productssss' + productArr)
			return products;
		}
		var productArr = []
		for(var i = 0;i<products.length;i++){			
			if(products[i].name==key)
			{
				productArr.push(products[i])
			}
		}
		return productArr;
	}
	
	
	
	
}