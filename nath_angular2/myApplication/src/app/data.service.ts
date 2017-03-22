export class DataService {
private data : number[] = [];

addData(private nu : number)
{
this.data.push(nu)
}

getData(){
return this.data;
}



}
