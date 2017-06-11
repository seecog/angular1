import {Directive,HostBinding,HostListener} from '@angular/core';
@Directive({selector : '[myd]'})

export class MyD{
	
	@HostListener('mouseover') mouseOver(){		
		console.log('Mouse over')
	}
	
	@HostListener('mouseout') mouseOut(){		
		console.log('Mouse out')
	}
	
}