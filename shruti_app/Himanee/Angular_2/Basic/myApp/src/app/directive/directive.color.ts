import {Directive, ElementRef,Renderer,HostListener} from "@angular/core";

@Directive({selector : '[myColor]'})

export class MyClass{
    constructor (private ele: ElementRef,private render: Renderer){

    }

    @HostListener('mouseover') mouseOver(){
       this.render.setElementStyle(this.ele.nativeElement,'display','none')
       this.render.setElementStyle(this.ele.nativeElement,'font-weight','normal')
    }

    @HostListener('mouseout') mouseOut(){
        this.render.setElementStyle(this.ele.nativeElement,'display','block')
        this.render.setElementStyle(this.ele.nativeElement,'font-weight','bold')
    }
}


