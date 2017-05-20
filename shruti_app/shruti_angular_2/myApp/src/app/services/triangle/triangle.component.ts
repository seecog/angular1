import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {TriangleService} from './triangle.service';
@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css'],
  providers : [TriangleService]
})
export class TriangleComponent implements OnInit {
private triForm : FormGroup;
  constructor(private triangleService : TriangleService) { }

  ngOnInit() {
	  this.triForm = new FormGroup({
		  a : new FormControl(null),
		  b : new FormControl(null),
		  c : new FormControl(null)
	  })
  }
  
  tri(){
	  var ans = this.triangleService.sideArea(this.triForm.value.a,this.triForm.value.a,this.triForm.value.c);
	  alert('ARea is '+ans)
  }

}
