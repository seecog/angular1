import {Pipe,PipeTransform} from '@angular/core'

@Pipe({name: 'limit'})

export class FindingMemo implements PipeTransform{
    transform(products:any,limit:number){
        if (products.length == 0){
            return products;
        }
        if(limit> products.length){
           
            return products;
        }
        let newArr=[];
        for(let i=0;i<limit;i++){
            newArr.push(products[i])
        }
        return (newArr);
    }
}
