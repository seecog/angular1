import {Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';
@Directive({selector : '[myLoop]'})

export class MyLoop{
	
	constructor(private template : TemplateRef<any>,private container :  ViewContainerRef){
		
	}
	
	@Input('myLoop') set loop(n : number){
		
		for(let i =0;i<n;i++){			
			this.container.createEmbeddedView(this.template)
		}
	}
	
	
}