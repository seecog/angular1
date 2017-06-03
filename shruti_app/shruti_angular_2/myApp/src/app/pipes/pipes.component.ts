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
private key : string = '';
private products : any = [
{id : 1,name : 'Apple',cost : 120,status : 'active'},
{id : 1,name : 'Banana',cost : 90,status : 'active'},
{id : 1,name : 'PineApple',cost : 190,status : 'iactive'}
];


	addProduct(){
		this.products.push({id : 11,name : 'Test',cost : 120,status : 'active'})
	}
  constructor() { }

  ngOnInit() {
  }

}
