import {Injectable} from '@angular/core';
import {PerimeterService} from './perimeter.service';
@Injectable()
export class Triangle{
	
	constructor(private peri : PerimeterService){}
	
	
	/*area(a : string,b : string,c : string){
		let p = this.peri.getPerimeter(a,b,c);
		var area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
	}*/
	
	
}