import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {StudentService} from './student.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-httpex',
  templateUrl: './httpex.component.html',
  styleUrls: ['./httpex.component.css'],
  providers : [StudentService]
})
export class HttpexComponent implements OnInit {

  constructor(private studentService : StudentService) { }
private frm : FormGroup;
  ngOnInit() {
	  this.frm = new FormGroup({
	  first_name : new FormControl(null),
	  last_name : new FormControl(null),
	  email : new FormControl(null),
	  img : new FormControl(null),
	  });
	  
  }
  
  saveStudent(){
	  console.log(this.frm.value);
	  
	  this.studentService.saveRecord(this.frm.value).subscribe(
	  (data : Response)=>console.log(data),
	  (err)=>console.log(err)
	  );
  }

}
