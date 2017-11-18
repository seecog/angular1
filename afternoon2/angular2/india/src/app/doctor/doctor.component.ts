import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
@Input() docinfo : any;
private patientdata : any;
  constructor() { }

  ngOnInit() {
  }
  
  show(patient : any){
	  this.patientdata = patient;
  }

}
