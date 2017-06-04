import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : 'vowrem'})
export class VowelRem implements PipeTransform{
	
	transform(value : string){
		var valArr = value.split('');
		for(var i=0;i<valArr.length;i++){
			if(valArr[i]=='a' || valArr[i]=='e' || 
			valArr[i]=='i' || valArr[i]=='o' || valArr[i]=='u'){
				
				valArr[i] = '';
			}
		}		
		return valArr.join('')
	}
	
}

