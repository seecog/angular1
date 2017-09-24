import { Component, OnInit,Input } from '@angular/core';
import {CityService} from '../../services/cities.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
private city : any;	
@Input() id : Number;
  constructor(private x : CityService) { }

  ngOnInit() {
	  console.log(typeof this.id)
	  this.city=this.x.getCity(this.id)
  }

}
