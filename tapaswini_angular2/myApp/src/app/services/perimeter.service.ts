
export class PerimeterService{
	
	constructor(){}
	getPerimeter(a : string,b : string,c : string){
		return ((parseFloat(a)+parseFloat(b)+parseFloat(c))/3);
	}
	
	
}