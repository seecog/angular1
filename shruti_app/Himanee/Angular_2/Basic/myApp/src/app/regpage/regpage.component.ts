import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {
private signUp :FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUp = new FormGroup({
      first_name : new FormControl(null,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      last_name :new FormControl(null,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      gender :new FormControl(null,[
         Validators.required
      ]),
      country :new FormControl(null,[
        Validators.required
      ]),
      email :new FormControl(null,[
        Validators.required,
        Validators.pattern('[A-Za-z]{3}')
      ]),
      contact :new FormControl(null,[
        Validators.required,
        Validators.pattern('[1-9]{10}')
      ]),
      address :new FormControl(null,[
        Validators.required,
        Validators.maxLength(15)
      ])

    });

    
  }

  saveRecord(){
    console.log(this.signUp.value)
  }

}
