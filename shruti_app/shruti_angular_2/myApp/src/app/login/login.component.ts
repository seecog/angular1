import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private loginForm : FormGroup;
  constructor(private route : Router) { }

  ngOnInit() {
	  this.loginForm = new FormGroup({
		  unm : new FormControl(null),
		  pass : new FormControl(null)
	  })
  }
  
  checkLogin(){
	  if(this.loginForm.value.unm=='pankaj' && this.loginForm.value.pass=='123456')
	  {
		  this.route.navigate(['product/2']);
	  }
  }
  

}
