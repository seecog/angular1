import { Component, OnInit } from '@angular/core';
import {Calculate} from './Calculate.service';
import {FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-servicecomponent',
  templateUrl: './servicecomponent.component.html',
  styleUrls: ['./servicecomponent.component.css'],
  providers:[Calculate]
})
export class ServicecomponentComponent implements OnInit {
  private methodss :FormGroup;

  constructor(private calculate: Calculate) { }

  ngOnInit() {
    this.methodss = new FormGroup({
      first_num : new FormControl(null,[
        Validators.required
      ]),
      second_num : new FormControl(null,[
        Validators.required])
    })
   /* var addition = this.calculate.sum();
    var multiply = this.calculate.multiply();*/
  }

addNum(){
  var ans= this.calculate.sum(parseInt(this.methodss.value.first_num),parseInt(this.methodss.value.second_num))
  alert('The sum is'+ ans);
}

MulNum(){
  var anss= this.calculate.multiply(parseInt(this.methodss.value.first_num),parseInt(this.methodss.value.second_num))
  alert('The Multiplication is'+ anss);
}

}
