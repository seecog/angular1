import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class StudentService
{
	
	constructor(private http : Http){
		
	}
	
	saveRecord(student : any){
		return this.http.post('https://college-b26c1.firebaseio.com/students.json',student);
	}
	
}