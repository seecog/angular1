import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
  First name {{first}}
  `
})
export class FirstComponent implements OnInit {
 @Input() first : number =0;
  constructor() { }

  ngOnInit() {
  }

}
