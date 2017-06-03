import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'hra'})
export class HraPipe implements PipeTransform{
	
	transform(bs : any){
		return (bs*30)/100;
		
	}
	
	
	
}