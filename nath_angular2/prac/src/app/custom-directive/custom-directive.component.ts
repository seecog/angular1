import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';
@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css'],
  providers : [CalculatorService]
})
export class CustomDirectiveComponent implements OnInit {
private a : string = '';
private b : string = '';
private c : number = 0;
  constructor(private calculatorService : CalculatorService) { }

addNum(){
this.c=this.calculatorService.add(parseInt(this.a),parseInt(this.b));
}
  ngOnInit() {
  }

}
