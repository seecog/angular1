export class CompanyService{
	
private employeeArr : any = [
{id : 1,name : 'Mohan kumar',dept : 'CSE'},
{id : 2,name : 'Sohan kumar',dept : 'ELEC'},
{id : 3,name : 'Rohan kumar',dept : 'MECH'}
];

getEmployees(){
	return this.employeeArr;
}

getEmployee(id : number){
	
	

	return this.employeeArr[id];
}
	
}