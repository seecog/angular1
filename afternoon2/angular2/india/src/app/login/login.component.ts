import { Component,SimpleChanges, OnInit,Input,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input() in : String;
@Input() in2 : String;
  constructor() { }
  
  ngOnChanges(x : SimpleChanges){
	  console.log('Changed')
	  console.log(x)
  }
  
  ngDoCheck(){
	  console.log("The check inside ngDoCheck")
  }

  ngOnInit() {
	  console.log("Inside on init..");
  }
  
  ngAfterContentInit(){
	  console.log
  }
  
  ngAfterContentChecked(){
	  console.log("inside ngAfterContentChecked")
  } 
  ngAfterViewInit(){
	  console.log("Inside ngAfterViewInit ")
  } 
  ngAfterViewChecked(){
	  console.log("inside the ngAfterViewChecked");
  }
  
  ngOnDestroy(){
	  console.log("destroyed")
  } 

}
