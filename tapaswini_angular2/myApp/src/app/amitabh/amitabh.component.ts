import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amitabh',
  templateUrl: './amitabh.component.html',
  styleUrls: ['./amitabh.component.css']
})
export class AmitabhComponent implements OnInit {

private first_name : string = 'Amitabh';
private last_name : string = ' Bacchan';
private address : any = {fax : '7565',mobile : 9098987878,email : 'amitabh@gmail.com'}
  constructor() { }

  ngOnInit() {
  }

}
