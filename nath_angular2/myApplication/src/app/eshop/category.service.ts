import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Category} from './category.model';
@Injectable()
export class CategoryService{
	
	constructor(private http:Http){		
		
	}
	
	
	getCategories(){
		
		return this.http.get('https://eshop-55892.firebaseio.com/categories.json');
	}
	
	updateCategory(category : Category,ref : string){
		console.log(category)
		console.log(ref)
		return this.http.put('https://eshop-55892.firebaseio.com/categories/'+ref+'.json',category);
	
	}
	
	deleteCategory(ref:string){
		return this.http.delete('https://eshop-55892.firebaseio.com/categories/'+ref+'.json');
	
	}
	
	getCategory(id){
		console.log('Inside th service '+id)
		return this.http.get('https://eshop-55892.firebaseio.com/categories/'+id+'.json');
	
	}
	
	saveCategory(category : Category){
		
		return this.http.post('https://eshop-55892.firebaseio.com/categories.json',category);
	}
}