import { MainlinkComponent } from './mainlink/mainlink.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { TelevisionComponent } from './television/television.component';
import { RadioComponent } from './radio/radio.component';
import { MicrovanComponent } from './microvan/microvan.component';
import { AcComponent } from './ac/ac.component';
import { OutinputComponent } from './outinput/outinput.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { LifeprocessComponent } from './lifeprocess.component';
import { FormValidation1Component } from './form-validation-1/form-validation-1.component';
import { FormValidation2Component } from './form-validation-2/form-validation-2.component';
import { FormValidationReactiveComponent } from './form-validation-reactive/form-validation-reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TemplateValidation21stAprilComponent } from './template-validation-21st-april/template-validation-21st-april.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import {Routes,RouterModule} from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';
const appRoutes : Routes = [
{path : 'products', component : ProductsComponent},
{path : 'editProduct/:id',component : EditproductComponent},
{path : 'addproduct',component : AddproductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    RefrigeratorComponent,
    TelevisionComponent,
    RadioComponent,
    MicrovanComponent,
    AcComponent,
    OutinputComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifeprocessComponent,
    FormValidation1Component,
    FormValidation2Component,
    FormValidationReactiveComponent,
    TemplateValidation21stAprilComponent,
    ReactiveFormValidationComponent,
    ProductsComponent,
    AddproductComponent,
    MainlinkComponent,
    EditproductComponent
	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
