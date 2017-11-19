import {Injectable} from '@angular/core';
import {Perimeter} from './perimeter.service';
@Injectable()
export class Triangle{
	
	constructor(private peri : Perimeter){
		
	}
	
	area(a : Number,b : Number,c : Number){
		var t1 = a.valueOf();
		var t2 = b.valueOf();
		var t3 = c.valueOf();
		var s = this.peri.getPerimeter(t1,t2,t3)
		return Math.sqrt(s*(s-t1)*(s-t2)*(s-t3))
	}
	
	
}