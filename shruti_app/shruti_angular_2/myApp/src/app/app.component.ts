import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first programme is good';
  private emp;
  
  showMessage(msg : string){
	  alert('the message is '+msg)
  }
  shwEmployeeDetail(employee : any){
	  this.emp = employee;
  }
}
