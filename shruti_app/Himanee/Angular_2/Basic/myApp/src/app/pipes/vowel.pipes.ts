import {Pipe, PipeTransform} from '@angular/core'
@Pipe({name : 'vowel'})

export class VowelPipe implements PipeTransform{
    //transform(value:number){
       // return 'Rs'+ value;
       private ar = [];
       private i :number=0;

       transform(value: any){
           this.ar =value.split('');

           for(this.i=0;this.i<=this.ar.length;this.i++){
               if(this.ar[this.i]=='a' || this.ar[this.i]=='e' || this.ar[this.i]=='o' ||this.ar[this.i]=='i' || this.ar[this.i]=='u'){
                   this.ar[this.i]= ' ';
               }
           }
       return (this.ar.join(''));
    }
}