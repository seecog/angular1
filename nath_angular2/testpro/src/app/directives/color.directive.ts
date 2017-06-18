import {Directive,ElementRef,Renderer,HostListener} from '@angular/core';
@Directive({selector : '[myColor]'})
export class MyColor{
	
	constructor(private ele : ElementRef,private renderer : Renderer){
		
	}
	
	@HostListener('mouseover') mouseOver(){
		console.log('mouseover')
		this.renderer.setElementStyle(this.ele.nativeElement,'color','red');
	}
	
	@HostListener('mouseout') mouseOut(){
		console.log('mouseout')
		this.renderer.setElementStyle(this.ele.nativeElement,'color','orange');
	}
	
}