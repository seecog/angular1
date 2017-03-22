import { Directive,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appThird]'
})
export class ThirdDirective {
@HostListener('mouseenter') mouseenter(){
this.background = this.textColor;
console.log('mouseover color is '+this.textColor)
}
@HostListener('mouseleave') mouseleave(){
this.background = 'red';
}
@Input() textColor = 'green';
private background = this.textColor;
@HostBinding('style.color') get setValue(){
return this.background;
}
  constructor() { }

}
