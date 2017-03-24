import { Component, OnInit , Input ,Output, EventEmitter} from '@angular/core';
import { CalculatorService } from './calculator.service';
import { ProductService } from './product.service';
@Component({
  selector: 'app-component-24-march',
  templateUrl: './component-24-march.component.html',
  styleUrls: ['./component-24-march.component.css'],
  providers : [CalculatorService,ProductService]
})
export class Component24MarchComponent implements OnInit {
private product_name : string = 'AC';
private product_cost : number = 12000;

@Input() name : string = '';
@Input() cost : string = '';
@Input() brand : string = 'Philips';
private sum : number = 0;
@Output() clicked = new EventEmitter<string>();
private swval : number = 100;
private stt : boolean = false;


@Input() id : number = 0;
@Input() nm : string = '';
@Input() ct : number = 0;
  constructor(private calculatorService : CalculatorService,private productService : ProductService) { }

addProduct(){
this.productService.addProduct({id : this.id,name : this.nm , cost : this.cost});
this.productService.getProduct();
}

 calculateSum(){
 this.sum = this.calculatorService.add(12,13);
 }

  clickMe(){
  
  alert('Click me')
  
  }

  ngOnInit() {
  }
  
  showMe(){
  
  this.clicked.emit('This is medication message');
  
  
  }
  
  showM(){
  
  this.stt = !this.stt;
  
  }

}
