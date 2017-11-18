import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
@Input() patient : any;
@Output() showpat = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
	  
  }
  
  showPatient(){
	  this.showpat.emit(this.patient)
  }

}
