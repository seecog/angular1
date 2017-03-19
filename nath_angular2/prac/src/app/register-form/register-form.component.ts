import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
fnm = 'Mohan';
lnm = 'lnm';
unm = 'shriMohan';
pass = '123434';
email = 'mohan@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
