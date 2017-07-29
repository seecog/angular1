import {Pipe, PipeTransform} from '@angular/core'
@Pipe({name : 'reev'})

export class ReversePipe implements PipeTransform{
    //transform(value:number){
       // return 'Rs'+ value;
       transform(value: any){
       return (value.split('').reverse().join(''));
    }
}