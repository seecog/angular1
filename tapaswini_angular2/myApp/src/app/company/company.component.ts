import { Component, OnInit } from '@angular/core';
import {MySal} from '../services/mysal.service';
import {Employee} from '../services/employee.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private mysal : MySal,private emp:Employee ) { }

  ngOnInit() {
	  
	  var ans = this.mysal.grosssal(12000)
	  console.log('The goss sal is '+ans)
	  this.emp.getEmployees().subscribe(
	  (data : Response)=>{
	  console.log('Th 888888888888888888888888888')
	  console.log(data)
	  }
	  )
  }

}
