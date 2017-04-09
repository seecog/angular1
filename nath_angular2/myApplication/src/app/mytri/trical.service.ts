import { Injectable } from '@angular/core';
import {TriperiService } from './triperi.service';
@Injectable()
export class TricalService {
private peri : number =0 ;
  constructor(private triperiService : TriperiService) { }

  area(a,b,c)
  {
	this.peri = this.triperiService.perimeter(a,b,c);
	console.log(this.peri)
	return Math.sqrt(this.peri*(this.peri-a)*(this.peri-b)*(this.peri-c));
  }
}
