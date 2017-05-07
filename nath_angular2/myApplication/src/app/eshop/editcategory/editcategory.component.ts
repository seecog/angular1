import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category.model';
import {Response} from '@angular/http';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
	category : Category;
@Input() id : string;
@Output() categoryInfo = new EventEmitter<any>();
@Output() categoryDelete = new EventEmitter<string>();
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
	  this.categoryService.getCategory(this.id).subscribe(
	  (data : Response)=>this.category=data.json(),
	  (error)=>console.log(error)
	  );
  }
  
  showCategory(){
	  this.categoryInfo.emit({category : this.category,ref : this.id});
  }
  
  deleteCategory(){
	  this.categoryDelete.emit(this.id);
  }

}
