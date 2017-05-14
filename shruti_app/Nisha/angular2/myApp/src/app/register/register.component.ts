import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm,FormGroup} from  '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { 
  
  }
@ViewChild('frm') fm : FormGroup;
  ngOnInit() {
  }
  saveRecord(){
  console.log(this.fm.value);
 console.log(this.fm.value.first_name);
  }

}
