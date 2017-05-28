import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asfilter',
  templateUrl: './asfilter.component.html',
  styleUrls: ['./asfilter.component.css']
})
export class AsfilterComponent implements OnInit {
private employees : any = [
{id : 1 , name : 'Mohan',salary : 2000},
{id : 2 , name : 'Sohan',salary : 8000},
{id : 3 , name : 'Rohan',salary : 11000},
{id : 4 , name : 'Prakash',salary : 25000}
];
  constructor() { }

  ngOnInit() {
  }

}
