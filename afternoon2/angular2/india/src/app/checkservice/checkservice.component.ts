import { Component, OnInit } from '@angular/core';
import {Calculator} from '../services/calculator.service';
import {Triangle} from '../services/trangle.service';
@Component({
  selector: 'app-checkservice',
  templateUrl: './checkservice.component.html',
  styleUrls: ['./checkservice.component.css']
})
export class CheckserviceComponent implements OnInit {

  constructor(private cal : Calculator,private tri : Triangle) { }

  ngOnInit() {
	  var ans = this.cal.add(11,33)
	  console.log('The sum is '+ans)
	  console.log(this.tri.area(77,88,78))
  }

}
