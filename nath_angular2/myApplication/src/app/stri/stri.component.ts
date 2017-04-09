import { Component, OnInit } from '@angular/core';
import { StricService } from './stric.service';
@Component({
  selector: 'app-stri',
  templateUrl: './stri.component.html',
  styleUrls: ['./stri.component.css'],
  providers : [StricService]
})
export class StriComponent implements OnInit {

a : number = 0;
b : number = 0;
c : number = 0;
peri : number = 0;
area(){
	
	this.peri= this.stricService.area(10,11,12);
}

  constructor(private stricService : StricService) { }

  ngOnInit() {
  }

}
