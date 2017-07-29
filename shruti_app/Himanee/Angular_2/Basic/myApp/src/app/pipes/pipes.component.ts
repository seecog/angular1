import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms';
import {Response} from '@angular/http';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
private salary :string = '';
//private name : string ='';
private btn_status : string ='';
private search :FormGroup;
private key : string = 'Apple';
private products :any = [
  {name : 'Apple',cost : 120},
{name : 'Banana',cost : 90}
];

/*addProduct(){
  console.log('inside add product')
  this.products.push({name : this.search.value.name  , cost : this.search.value.cost })
  console.log(this.products)
}*/

  constructor() {
      
   }

  ngOnInit() {
    this.search = new FormGroup({
      name : new FormControl(null),
      cost : new FormControl(null)
  })
  //this.btn_status = 'add';
}


 addProduct(){
   this.key = '';
	  this.products.push({name : this.search.value.name  , cost : this.search.value.cost })
    
    /*.subscribe(
      
	  (res : Response)=>{
		  this.getProducts();
	  },
	  (error)=>console.log(error)
	  )	  
  }*/
}
}