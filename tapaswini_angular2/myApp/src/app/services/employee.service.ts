import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
@Injectable()
export class Employee {
	
	constructor(private http : Http){}
	
	
	getEmployees(){
		
		return this.http.get('https://books-ad908.firebaseio.com/employee.json');
		
	}
	
}