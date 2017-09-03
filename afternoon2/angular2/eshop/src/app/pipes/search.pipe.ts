import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'searchme',pure : true})
export class SearchMe implements PipeTransform{
	
	transform(products : any[],key : string){
		var newArr = [];
		for(var i=0;i<products.length;i++){
			
			if(products[i].name==key)
			{
				newArr.push(products[i])
			}
		}
		
		return newArr;
	}
	
	
}