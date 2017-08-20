export class SalaryService{
	
	
	grossSalary(bs:number){
		
		return bs+this.getDa(bs)+this.getHra(bs)+this.getTa(bs)
		
	}
	getDa(bs : number){
		return (10*bs)/100;
		
	}
	getTa(bs : number){
		return (7*bs)/100;
	}
	getHra(bs : number){
		return (15*bs)/100;
	}
	
	
	
}