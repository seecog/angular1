import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(t1: Number, t2: Number): any {
	  console.log(t1+'--'+t2)
	  var p =1;
	  for(var i=1;i<=t2;i++)
	  {
		  p=p*t1;
	  }
	  console.log('ps is '+p)
    return p;
  }

}
