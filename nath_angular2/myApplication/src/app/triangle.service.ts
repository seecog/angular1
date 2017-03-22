
export class TriangleService {
private area : number = 0;
private s : number;
sideArea(a : number,b : number, c : number)
{
this.s = (a+b+c)/2.0;
this.area = Math.sqrt(this.s*(this.s-a)*(this.s-b)*(this.s-c));
return this.area;
}

}
