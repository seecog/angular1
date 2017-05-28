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
import { FormValidation1Component } from './form-validation-1/form-validation-1.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpexComponent } from './httpex/httpex.component';
import { EshopComponent } from './eshop/eshop.component';
import { EditcategoryComponent } from './eshop/editcategory/editcategory.component';
import { BasicComponent } from './basic/basic.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import {DoublePipe} from './contact/double.pipe';
import {KeyfilterPipe} from './contact/keyfilter.pipe';
import { OsComponent } from './os/os.component';
import { AsfilterComponent } from './asfilter/asfilter.component';
import {SalFilter} from './asfilter/salfilter.pipe';
import {LimitFilter} from './asfilter/limitfilter.pipe';
const appRoutes : Routes = [
{
path : '',
component : HomeComponent
},
{
	path : 'users',
	component : UsersComponent
},
{
	path : 'users/:id',
	component : UserComponent	
},
{
	path : 'contact',
	component : ContactComponent
	
}
];

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
    MytriComponent,
    FormValidation1Component,
    ReactiveApproachComponent,
    HttpexComponent,
    EshopComponent,
    EditcategoryComponent,
    BasicComponent,
    HomeComponent,
    UsersComponent,
    ContactComponent,
    UserComponent,
	DoublePipe,
	KeyfilterPipe,
	OsComponent,
	AsfilterComponent,
	SalFilter,
	LimitFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [LogService,CalculateService,TriperiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
