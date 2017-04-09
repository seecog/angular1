
export class StricService {
res : number = 0;
area(a:number,b:number,c:number){
	this.res = (a+b+c)/2.0;
	return this.res;
	
}

  constructor() { }

}
