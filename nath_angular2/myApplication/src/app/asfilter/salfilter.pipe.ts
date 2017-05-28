import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'salfilter'})
export class SalFilter implements PipeTransform{
	
	transform(employees : any,key : string){
	if(employees.length==0){
		return employees;
	}
	
	const empArray = [];
	for(let employee of employees){
		if(employee.salary <= key){
			empArray.push(employee)
		}
		
	}
	return empArray;
		
	}
	
	
}