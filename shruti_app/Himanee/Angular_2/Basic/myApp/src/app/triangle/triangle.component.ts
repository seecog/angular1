import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
private a:string ='0';
private b:string ='0';
private c:string ='0';
private s: number = 0;
private area : number =0;
private t1 : number;
private t2 : number;
private t3 : number;
  constructor() { }

  ngOnInit() {
  }

calculate(){
this.t1 =(parseInt(this.a));
this.t2 =(parseInt(this.b));
this.t3 =(parseInt(this.c));

 this.s =((parseInt(this.a)+ parseInt(this.b)+ parseInt(this.c))/2) ;
 this.area = Math.sqrt(this.s*(this.s-this.t1)*(this.s-this.t2)*(this.s-this.t2));
}
}
