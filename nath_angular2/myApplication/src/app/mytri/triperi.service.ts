import { Injectable } from '@angular/core';

@Injectable()
export class TriperiService {

  constructor() { }
  
  perimeter(a,b,c)
  {
	  return (a+b+c)/2.0;
  }

}
