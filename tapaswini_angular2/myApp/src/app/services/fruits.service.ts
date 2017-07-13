import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class FruitService{
	
	
	constructor(private http : Http){//dependency injection in Angular2	
		
	}
	
	getFruits(){
		return this.http.get('https://books-ad908.firebaseio.com/fruits.json').map(res=>res.json());
	}
	
	addFruit(fruit : any){
		return this.http.post('https://books-ad908.firebaseio.com/fruits.json',fruit)
	}
	
	deleteFruit(key)
	{
		return this.http.delete('https://books-ad908.firebaseio.com/fruits/'+key+'.json')
	}
	
	
}