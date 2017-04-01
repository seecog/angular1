import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirective3]'
})
export class Directive3Directive {

  constructor() { }
  @HostListener('mouseover') mouseover(){
  this.dstt = 'none';
  console.log('Mouse is over')
  
  }
  @HostListener('mouseout') mouseout(){
  //this.dstt = 'block';
  //console.log('Mouse is out')
  
  }
  private dstt : string = 'block';
  @HostBinding('style.display') get setStyle(){
  return this.dstt;
  
  }

}
