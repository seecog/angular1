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
import {DataService} from './data.service';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HighlightDirective,
    HoverDirective,
    ThirdDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
