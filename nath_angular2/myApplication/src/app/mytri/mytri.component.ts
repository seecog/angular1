import { Component, OnInit } from '@angular/core';
import {TricalService} from './trical.service';
@Component({
  selector: 'app-mytri',
  templateUrl: './mytri.component.html',
  styleUrls: ['./mytri.component.css'],
  providers : [TricalService]
})
export class MytriComponent implements OnInit {
private result : number = 0;
  constructor(private tricalService : TricalService) { }

  area(){
	  
	this.result =  this.tricalService.area(2,3,4);
  }
  ngOnInit() {
  }

}
