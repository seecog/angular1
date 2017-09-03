import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'limit'})
export class LimitPipe implements PipeTransform{
//	
	transform(products : any[],l1 : number){
		var rtwt = [];
		for(var i=0;i<l1;i++){
			rtwt.push(products[i])
		}
		return rtwt;
	}
	
}