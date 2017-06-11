import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produts',
  template: `
  {{products | json}}
  <hr>
  {{fnm}}
  <hr>
  <table>
  <th>Id</th><th>Name</th>
  <tr *ngFor="let x of products">
  <td>{{x.id}}</td><td>{{x.name}}</td>
  
  </tr>  
  </table>
  
  `,
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
private products : any = [
{id : 1,name : 'Mango'},
{id : 2 ,name : 'Litchi'}
];
private fnm : string = 'Mohan';
  constructor() { }

  ngOnInit() {
  }

}
