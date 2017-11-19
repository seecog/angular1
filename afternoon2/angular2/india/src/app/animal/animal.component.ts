import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
@Input() animal : any;
@Output() emitAnimal : any = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  showAnimal(){
	  this.emitAnimal.emit(this.animal)
  }

}
