import { Directive,HostBinding,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

@HostListener('mouseenter') mouseenter(){
this.backgroundColor = 'green';
}

@HostListener('mouseleave') mouseleave(){

this.backgroundColor = 'red'

}



@Input() backgroundColor = 'green';

@HostBinding('style.backgroundColor') get setColor(){
return this.backgroundColor;

}
  constructor() { }

}
