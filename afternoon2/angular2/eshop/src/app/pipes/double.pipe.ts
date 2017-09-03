import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'double'})
export class Double implements PipeTransform{
	
	
	
	transform(x : number){
		return 2*x;
		
	}
	
}