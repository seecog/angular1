import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private msg : string = '';

setMessage(arg : string){
	this.msg = arg;
}
clearMessage(){
	this.msg =  '';	
}
  constructor() { }

  ngOnInit() {
  }

}
