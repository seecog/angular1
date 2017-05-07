import { Component } from '@angular/core';
import {Emp} from './property-binding/employee.model';
import {Product} from './property-binding/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first programme is good';
  private empr : Emp;
  private product : Product;
  showMessage(msg : string){
	  alert('the message is '+msg)
  }
  shwEmployeeDetail(employee : Emp){
	  this.empr = employee;
  }
  showSpecificDish(product : Product){
	  this.product = product;
  }
}
