import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  constructor() { }
  @HostListener('mouseover') mouseover(){
  this.face = '40px';
  console.log('Mouse is over')
  
  }
  @HostListener('mouseout') mouseout(){
  this.face = '20px';
  console.log('Mouse is out')
  
  }
  private face : string = '20px';
  @HostBinding('style.fontSize') get setStyle(){
  console.log('value is '+this.face)
  return this.face;
  
  }
}
