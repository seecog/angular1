import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	private nm : string ='';
	setData(y : string){
		this.nm = y;
	}
	
	add(a : number,b : number){
		return (a+b);
	}
	
}
