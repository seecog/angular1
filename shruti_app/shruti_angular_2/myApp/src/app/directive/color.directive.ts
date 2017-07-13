import {Directive,ElementRef,Renderer,HostListener} from '@angular/core';
@Directive({selector : '[myColor]'})
export class MyColor{
	
	constructor(private ele : ElementRef,private render : Renderer){
		
	}
	
	@HostListener('mouseover') mouseOver(){
		
		console.log('mouse over')
		this.render.setElementStyle(this.ele.nativeElement,'color','red')
	}
	
	@HostListener('mouseout') mouseOut(){
		
		console.log('mouse out')
		this.render.setElementStyle(this.ele.nativeElement,'color','green')
	}
	
}