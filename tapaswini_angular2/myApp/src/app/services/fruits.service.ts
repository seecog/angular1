import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class FruitService{
	
	
	constructor(private http : Http){//dependency injection in Angular2	
		
	}
	
	getFruits(){
		return this.http.get('https://vendor-1c1ec.firebaseio.com/fruits.json').map(res=>res.json());
	}
	
	addFruit(fruit : any){
		console.log('Inside the service.....................')
		return this.http.post('https://vendor-1c1ec.firebaseio.com/fruits.json',fruit)
	}
	
	deleteFruit(key)
	{
		return this.http.delete('https://vendor-1c1ec.firebaseio.com/fruits/'+key+'.json')
	}
	
	updateFruit(key : string,fruit : any){
		
		return this.http.put('https://vendor-1c1ec.firebaseio.com/fruits'+key+'.json',fruit);
	}
	
	
}