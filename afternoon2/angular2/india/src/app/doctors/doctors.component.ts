import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

private doctors : any[]= [

{name : 'Mohan',age : 21,speciality : 'NEURO',img : 'https://i.ytimg.com/vi/d7tU9wJzoN0/maxresdefault.jpg',salary : 200000,
patients : [
{name : 'Arun kumar',age : 43,disease : 'Malaria'},
{name : 'Suresh kumar',age : 41,disease : 'cholera'}
]

},
	{
		name : 'Sohan',age : 2,speciality : 'ENT',img : 'http://www.healthandhopes.com/wp-content/uploads/2016/10/Dr.-W.V.B.S.-Ramalingam.png',salary : 150000,patients : [
		{name : 'Tapan kumar',age : 43,disease : 'Malaria'},
{name : 'Anju kumar',age : 41,disease : 'Typhod'}
		]
		
	},
		{}

];
  constructor() { }

  ngOnInit() {
  }

}
