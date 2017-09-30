import { Component, OnInit } from '@angular/core';
import {MobileService} from '../services/mobile.service';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
private mobiles : any[];
private mob : any;
  constructor(private x : MobileService) { }

  ngOnInit() {
	  this.mobiles = this.x.getMobiles();
  }
  
  
  showMobile(mobileData : any){
	  this.mob = mobileData;	  
  }

}
