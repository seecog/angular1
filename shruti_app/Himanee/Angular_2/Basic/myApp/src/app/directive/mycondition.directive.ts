import {Directive, TemplateRef,ViewContainerRef,Input} from "@angular/core";

@Directive({selector : '[myCondition]'})

export class MyCondition{

constructor(private template:TemplateRef<any>,private container :ViewContainerRef){

}

@Input('myCondition') set check(n: string){
    if (n){
        this.container.createEmbeddedView(this.template)
    }
    else{
        this.container.clear();
    }
}
}