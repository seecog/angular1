import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers : [CompanyService]
})
export class CompanyComponent implements OnInit {
private  employeeArr : any;
  constructor(private companyService : CompanyService) { }

  ngOnInit() {
	 // console.log(this.employees)
	 this.employeeArr = this.companyService.getEmployees();
  }

}
