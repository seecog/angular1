import {Injectable} from '@angular/core';
import {Ta} from './ta.service';
import {Da} from './da.service';
import {Hra} from './hra.service';
@Injectable()
export class Mysal{
	
	
	constructor(private da : Da,private ta : Ta,private hra : Hra){
		
		
	}
	
	getSalary(bs : number){
		
		return bs+this.da.getDa(bs)+this.ta.getTa(bs)+this.hra.getHra(bs)
	}
	
}