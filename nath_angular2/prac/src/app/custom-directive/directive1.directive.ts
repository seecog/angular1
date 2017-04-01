import { Directive,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

@HostListener('mouseover') mouseover(){
this.color = '30px';
console.log('Mouse is moved over '+this.overcolor);
}

@HostListener('mouseout') mouseout(){
this.color = '10px';
console.log('Mouseout '+this.outcolor)

}
@Input() overcolor : string = '';
@Input() outcolor : string ='';
private color : string = '12px';

@HostBinding('style.fontSize') get setStyle(){
return this.color;

}

}
