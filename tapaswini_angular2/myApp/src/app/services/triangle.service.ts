import {Injectable} from '@angular/core';
import {PerimeterService} from './perimeter.service';
@Injectable()
export class Triangle{
	
	constructor(private peri : PerimeterService){}
	
	
	area(a : string,b : string,c : string){
		let perimeter = this.peri.getPerimeter(a,b,c);
		console.log('perimeter is '+perimeter)
	}
	
	
}