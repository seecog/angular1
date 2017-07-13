import {Injectable} from '@angular/core';
import {Da} from './da.service';
import {Hra} from './hra.service';
@Injectable()
export class Salary{
	
	constructor(private da : Da , private hra : Hra){
		
	}
	
	getSalary(bs : string){
		
		return (parseFloat(bs)+this.da.getDa(bs)+this.hra.getHra(bs));
	}
	
}