import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'area'})
export class AreaPipe implements PipeTransform{
	
	transform(y : number){
		return 3.14*y*y;
	}
	
	
}