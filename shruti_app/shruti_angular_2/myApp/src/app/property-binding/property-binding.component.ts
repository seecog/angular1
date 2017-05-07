import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Emp} from './employee.model';
import {Product} from './product.model';
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
@Input()  id : string;
private products : Product[] = [
new Product('Palak Paneer',120,'http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-recipe25.jpg'),
new Product('Alu Jeera',100,'https://upload.wikimedia.org/wikipedia/commons/c/c8/Aloo_gobi.jpg'),
new Product('Alu Gobi',80,'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Jeera-Aloo-KhaanaKhazana.JPG')
];
/*private first_name : string = 'Sohan';
private stt : boolean = true;
private myInfo : string ='I am an indian';
em : Emp = new Emp('rohit','kumar');
@Input() email : string = '';
@Input() last_name : string ='';
@Output() clickPankaj = new EventEmitter<string>();
@Output() employedetail = new EventEmitter<Emp>();*/


@Output() productDetail = new EventEmitter<Product>();
  constructor() {
  }
  
  showNow(){
	  //this.clickPankaj.emit('I know banglore city..');
	 // this.employedetail.emit(new Emp('rohit','kumar'));
  }
  
  showProduct(id){
	  this.productDetail.emit(this.products[id]);
  }

}
