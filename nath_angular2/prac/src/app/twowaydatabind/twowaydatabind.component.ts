import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabind',
  templateUrl: './twowaydatabind.component.html',
  styleUrls: ['./twowaydatabind.component.css']
})
export class TwowaydatabindComponent implements OnInit {


private name : string = 'Mohan';
  constructor() { }

  ngOnInit() {
  }

}
