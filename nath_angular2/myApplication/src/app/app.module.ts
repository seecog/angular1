import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HighlightDirective } from './second/highlight.directive';
import { HoverDirective } from './second/hover.directive';
import { ThirdDirective } from './second/third.directive';
import { LogService } from './log.service';
import { ProductComponent } from './product/product.component';
import { CalculateService } from './calculate.service';
import { Component24MarchComponent } from './component-24-march/component-24-march.component';
import { EffectDirective } from './component-24-march/effect.directive';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { StriComponent } from './stri/stri.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MytriComponent } from './mytri/mytri.component';
import { TriperiService } from './mytri/triperi.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HighlightDirective,
    HoverDirective,
    ThirdDirective,
    ProductComponent,
    Component24MarchComponent,
    EffectDirective,
    FormvalidationComponent,
    StriComponent,
    ShoppingComponent,
    MytriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService,CalculateService,TriperiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
