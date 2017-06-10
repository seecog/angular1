import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../services/company.service';
@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css'],
  providers : [CompanyService]
})
export class EmployeeinfoComponent implements OnInit {
private emp : any;
  constructor(private active : ActivatedRoute,private companyService : CompanyService) { }

  ngOnInit() {
	  let id = this.active.snapshot.params['id']
	  console.log('The id is '+id)
	  this.emp = this.companyService.getEmployee(id);
  }

}
