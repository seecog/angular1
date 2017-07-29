import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mohan',
  templateUrl: './mohan.component.html',
  styleUrls: ['./mohan.component.css']
})
export class MohanComponent implements OnInit {
	private first_name : string = 'Mohan';
	private last_name : string = 'kumar';
	private age : number = 21;

  constructor() { }

  ngOnInit() {
  }

}
