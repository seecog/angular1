import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <input type="text" [(ngModel)]="person.name"><br>
  <input type="text" [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent {

person = {name : 'Mohan',age : 27}

}
