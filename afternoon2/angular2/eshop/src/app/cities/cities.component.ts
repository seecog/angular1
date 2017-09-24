import { Component, OnInit } from '@angular/core';
import {CityService} from '../services/cities.service';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
private cities : any[] ;
 constructor(private x : CityService) { }

  ngOnInit() {
	  this.cities = this.x.getCities();
  }

}
