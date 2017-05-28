import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
private first_name : string = 'mohan';
private last_name : string = 'KUMAR';
private salary : number = 100000;
private jdt : any = new Date('2012-01-12');
  constructor() { }

  ngOnInit() {
  }

}
