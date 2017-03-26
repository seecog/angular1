import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-twowaydatabindobj',
  templateUrl: './twowaydatabindobj.component.html',
  styleUrls: ['./twowaydatabindobj.component.css']
})
export class TwowaydatabindobjComponent implements OnInit {

private product : Product = {id : 1,nm : 'Fan',cost : 1500} ;
  constructor() { }

  ngOnInit() {
  }

}
