import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
  <h1>Login Page!</h1>
  <form name="frm">
  <p>
  Username : <input>
  </p>
  <p>
  Password : <input>
  </p>
  <p>
  <button class="btn btn-primary">Register</button>
  </p>
  </form>
  `,
  styles: [
  `
  h1{
	  color:red
  }  
  ` 
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
