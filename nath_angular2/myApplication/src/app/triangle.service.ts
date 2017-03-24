
import { Injectable } from '@angular/core';
import { CalculateService } from './calculate.service';

@Injectable()
export class TriangleService {
private area : number = 0;
private s : number;
constructor(private calculateService : CalculateService)
{

}
sideArea(a : number,b : number, c : number)
{
this.s = this.calculateService.perimeter(a,b,c);
this.area = Math.sqrt(this.s*(this.s-a)*(this.s-b)*(this.s-c));
return this.area;
}

}
