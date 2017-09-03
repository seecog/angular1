import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {

  constructor() { }
  
  private search : string='';
  
  private products : any[] = [
  
  {id : 1,name : 'mango',cost : 120},
	  {id : 2,name : 'apple',cost : 150},
		  {id : 3,name : 'lithi',cost : 200}
  ];
  private key : string = '';
  ngOnInit() {
  }

}
