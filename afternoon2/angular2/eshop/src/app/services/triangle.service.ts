import {PerimeterService} from './perimeter.service';
import {Injectable} from '@angular/core';
@Injectable()
export class TriangleService{
	
	constructor(private per : PerimeterService){		
		
	}
	
	
	area(a:number,b:number,c:number){
		
		var s = this.per.peri(a,b,c);;
		var ar = Math.sqrt(s*(s-a)*(s-b)*(s-c))
		return ar;
	}
	
	
	
}