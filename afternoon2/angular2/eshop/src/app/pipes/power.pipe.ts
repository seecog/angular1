import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'powe'})

export class PowerPipe implements PipeTransform{
	
	transform(x : number){
		
		
		return 'Hello';
	}
	
}