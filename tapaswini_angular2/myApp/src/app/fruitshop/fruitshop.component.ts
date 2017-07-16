import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {FruitService} from '../services/fruits.service';
@Component({
  selector: 'app-fruitshop',
  templateUrl: './fruitshop.component.html',
  styleUrls: ['./fruitshop.component.css']
})
export class FruitshopComponent implements OnInit {
private product : any = {};
private products : any[];
private btnStt = 1;
private add_msg : string = '';
  constructor(private fruitService : FruitService) { }

  ngOnInit() {
	 this.getFruits(); 
  }
  
  getFruits(){
	  this.fruitService.getFruits().subscribe(
	  (data)=>{
		  this.products = data;
		  const keyArr = Object.keys(data);
		  this.products = [];
		 for(var i=0;i<keyArr.length;i++)
		 {
			 this.products.push({
			 key : keyArr[i],
			 product_name : data[keyArr[i]].product_name,
			 product_cost : data[keyArr[i]].product_cost,
			 brand_id : data[keyArr[i]].brand_id
			 }
			 
			 )
			 
			
		 }
	  },
	  (error)=>console.log(error)
	  )
  }
  
  addFruit(){
	 return this.fruitService.addFruit(this.product).subscribe(
	 (data)=>{
	 this.product = {};
	 this.getFruits();
	 },
	 (error)=>console.log(error)
	 
	 );
  }
  
  deleteFruit(key){
	  return this.fruitService.deleteFruit(key).subscribe(
	 (data)=>{
	 console.log('deleted')
	 this.getFruits();
	 },
	 (error)=>console.log(error)
	 
	 );
  }
  
  editFruit(fruit : any,key : string){
	  this.btnStt = 2;
	  console.log('The component object is')
	  console.log(fruit )
	  this.product = fruit;
	  this.product.key = key;
	  console.log('The key is '+this.product.key)
  }
  
  updateFruit(product , key){
	  this.fruitService.updateFruit(key,product).subscribe(
	 (data)=>{
	 console.log('Updated I like it!')
	 this.getFruits();
	 this.add_msg = 'Record updated successfully!'
	 },
	 (error)=>console.log(error)
	 
	 );
  }

}

