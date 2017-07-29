import { Component, OnInit } from '@angular/core';
import {skeleton} from './fruits.model';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  private vendors:FormGroup;
  private storeArray:skeleton[] =[];
  private btn_status : string= 'add';

  constructor() { }

  ngOnInit() {
    this.vendors = new FormGroup({
		  key : new FormControl(null),
		  fruit_name : new FormControl(null),
		  fruit_colour : new FormControl(null),
		  fruit_qty : new FormControl(null)
	  });
  }



}
