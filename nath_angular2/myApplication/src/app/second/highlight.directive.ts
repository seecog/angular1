import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele : ElementRef) 
  { 
  this.ele.nativeElement.style.backgroundColor = 'green';
  }

}
