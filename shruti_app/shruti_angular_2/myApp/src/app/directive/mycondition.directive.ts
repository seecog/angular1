import {Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';
@Directive({selector : '[myCondition]'})

export class MyCondition{
	
	constructor(private template : TemplateRef<any>,private  container : ViewContainerRef){
		
	}
	
	@Input('myCondition') set condition(x : boolean){
		
		if(x){
			this.container.createEmbeddedView(this.template)
		}
		else{
			this.container.clear();
		}
	}
	
}