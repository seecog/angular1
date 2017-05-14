import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {FormGroup,FormControl} from '@angular/forms';
import {Response} from '@angular/http';
import {Category} from './category.model';
@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css'],
  providers : [CategoryService]
})
export class EshopComponent implements OnInit {
private categories : Category[] = [];
  constructor(private categoryService : CategoryService) { }
  
  editCategory : Category;
private addCategoryForm : FormGroup;
private editCategoryForm : FormGroup;
  ngOnInit() {
	  this.addCategoryForm = new FormGroup({
		  category_name : new FormControl(null),
		  category_img : new FormControl(null)		  
	  });
	  
	  
	  this.getCategories();
  }
  
  saveCategory(){
	  this.categoryService.saveCategory(this.addCategoryForm.value).subscribe(
	  (data : Response)=>{
		  
		  this.getCategories();
		  
	  },
	  (error)=>console.log(error)
	  );
	  
  }
  
  showEdit(obj : any){
	  this.editCategory = obj.category;
	  //this.editCategoryForm.get('category_name').value('dh');
	  this.editCategoryForm = new FormGroup({
		  category_ref : new FormControl(obj.ref),
		  category_name : new FormControl(obj.category.category_name),
		  category_img : new FormControl(obj.category.category_img)		  
	  });
  }
  
  deleteCategory(ref : string){
	  this.categoryService.deleteCategory(ref).subscribe(
	  (data : Response)=>console.log(data),
	  (error)=>console.log(error)
	  );
  
  }
  
  updateCategory(){
	  console.log(this.editCategoryForm.value)
	  this.categoryService.updateCategory({
		  category_name : this.editCategoryForm.value.category_name,
		  category_img : this.editCategoryForm.value.category_img,
	  },this.editCategoryForm.value.category_ref).subscribe(
	  (data : Response)=>console.log(data),
	  (error)=>console.log(error)
	  );
  }
  
  getCategories(){
	  this.categoryService.getCategories().subscribe(
	  (data : Response)=>{
		  const ams = data.json();
		  //this.categories = data.json()
		  const x = (ams).map(function(key){return ams[key]})
		  console.log('The retrived data is ')
		  console.log(x)
	  },
	  (error)=>console.log(error)
	  );
  }

}
