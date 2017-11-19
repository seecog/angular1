import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
	private animalInfo : any;
private animals : any[] = [
{
	name : 'Tiger',
	loc : 'Maharastra',
	life_span : 22,
	color : 'yellow',
	pic : 'http://factslegend.org/factslegend/wp-content/uploads/2017/03/Royal-bengal-tiger.jpg'
	
},
	{
	name : 'Elephant',
	loc : 'Maharastra',
	life_span : 19,
	color : 'Brown',
	pic : 'https://i.ytimg.com/vi/SNggmeilXDQ/maxresdefault.jpg'
	
		
	},
		{
    name : 'Rhino',
	loc : 'bangalore',
	life_span : 22,
	color : 'Brown',
	pic : 'http://www.wildaid.org/sites/default/files/iStock_000011369650Large.jpg'
			
		}

];
  constructor() { }

  ngOnInit() {
  }
show(animal : any){
	this.animalInfo = animal;
}
}
