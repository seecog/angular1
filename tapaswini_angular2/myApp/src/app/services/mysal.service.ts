import {MyDa} from './myda.service';
import {MyTa} from './myta.service';
import {MyHra} from './myhra.service';
import {Injectable} from '@angular/core';
@Injectable()
export class MySal{
	
	constructor(private da : MyDa,private hra : MyHra,private ta : MyTa){//dependency injection
		
	}
	
	grosssal(bs : number){
		
		var da = this.da.getDa(bs);
		var hra = this.hra.getHra(bs);
		var ta = this.ta.getTa(bs);		
		var gs = bs+da+hra+ta;
		return gs;
	}
	
	
}