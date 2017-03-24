import { Directive,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appEffect]'
})
export class EffectDirective {

@HostListener('mouseover') mouseover(){

console.log('Mouse is over'+this.customin)
this.backgroundC = this.customin;

}

@HostListener('mouseleave') mouseleave(){

console.log('Mouse is leaving')
this.backgroundC = this.customout;

}


@Input() customin : string = '';
@Input() customout : string = '';
private backgroundC : string = '';
@HostBinding('style.backgroundColor') get setValue(){
return this.backgroundC;

}
  constructor() { }

}
