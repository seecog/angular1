import {Pipe, PipeTransform} from '@angular/core'
@Pipe({name : 'double'})

export class DoublPipe implements PipeTransform{
    //transform(value:number){
       // return 'Rs'+ value;
       transform(value: any){
       return (value * 2);
    }
}