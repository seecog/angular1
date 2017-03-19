import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dravid',
  templateUrl: './dravid.component.html',
  styleUrls: ['./dravid.component.css']
})
export class DravidComponent implements OnInit {
  first_name = 'Rahul';
  last_name = 'Dravid';
  age = 40;
  not = 70;
  constructor() { }

  ngOnInit() {
  }

}
