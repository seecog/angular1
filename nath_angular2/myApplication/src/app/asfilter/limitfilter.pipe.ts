import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'limitfilter'})
export class LimitFilter implements PipeTransform{
	
	transform(employees : any,key : string){
	if(employees.length==0){
		return employees;
	}
	
	const empArray = [];
	var lim = parseInt(key)
	for(var i=0;i<lim;i++){
			empArray.push(employees[i])			
	}
	return empArray;
		
	}
	
	
}