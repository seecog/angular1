import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="see()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent {

see(){

alert('Please see here')

}

}
