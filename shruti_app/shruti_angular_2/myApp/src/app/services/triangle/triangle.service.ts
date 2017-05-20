import {Injectable} from '@angular/core';
import {PerimeterService} from './perimeter.service';
@Injectable()
export class TriangleService {
	
	constructor(private perimeterService : PerimeterService){
		
	}
	sideArea(a:number,b:number,c :number){
		var p = this.perimeterService.gerPeri(a,b,c);
		var ar = Math.sqrt(p*(p-a)*(p-b)*(p-c));
		return ar;
	}
	
	
	
}