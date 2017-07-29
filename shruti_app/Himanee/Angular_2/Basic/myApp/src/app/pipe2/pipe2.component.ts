import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe2',
  templateUrl: './pipe2.component.html',
  styleUrls: ['./pipe2.component.css']
})
export class Pipe2Component implements OnInit {
private products: any = [{name:'ponds',items : '2'},
                    {name:'rice',items : '3'},
                    {name:'shrug',items : '1'},
                    {name:'apple',items : '3'}];

private key:number =2;
  constructor() { }

  ngOnInit() {
  }

}
