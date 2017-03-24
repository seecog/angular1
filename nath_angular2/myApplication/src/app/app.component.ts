import { Component } from '@angular/core';
import { TriangleService } from './triangle.service';
import { ProductlistService } from './productlist.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  template: `
  <app-component-24-march name="Mohan" cost="100" brand="Philips Innovation" (clicked)="showMedication($event)"></app-component-24-march>
  
  
  <!--<button (click)="showMessage()">Show Me</button><br>
  <button (click)="calculateArea()">Calculate Area</button>{{area}}
  <div class="container">
  <div class="row">
  <div class="col-lg-6">
  <table class="table">
  <th>Id</th><th>Product Name</th><th>Cost</th>
  <tr *ngFor="let x of products">
  <td>{{x.id}}</td><td>{{x.name}}</td><td>{{x.cost}}</td>
  </tr>
  </table>
  </div>
  <div class="col-lg-6">
  
  <div class="form-group">
  <label for="id">Id</label>
  <input [(ngModel)]="id" class="form-control">
  </div>
  
  
  <div class="form-group">
  <label for="id">Name</label>
  <input [(ngModel)]="name" class="form-control">
  </div>
  
  <div class="form-group">
  <label for="id">Cost</label>
  <input [(ngModel)]="cost" class="form-control">
  </div>
  
  <div class="form-group">
  <button class="btn btn-primary" (click)="saveProduct()">Save Product</button>
  </div>
  
  </div>
  
  </div>-->
  `,
  providers : [TriangleService,ProductlistService]
})
export class AppComponent {
private area : number = 0;

constructor(private triangleService : TriangleService,private productlist : ProductlistService)
{


}

showMedication(item : string){
alert('Correct value is '+item);

}

//saving product start
private products : Product[]=[];
private id : number = 0;
private name : string = '';
private cost : number = 0;
saveProduct(){
this.products = this.productlist.saveProduct(this.id,this.name,this.cost);
this.id = 0;
this.name = '';
this.cost = 0;
}
//saving the product end


calculateArea(){
 this.area= this.triangleService.sideArea(10,12,13);
console.log('the area is '+this.area)
}

 get(value : string){
 alert('the value is '+value)
 }
}