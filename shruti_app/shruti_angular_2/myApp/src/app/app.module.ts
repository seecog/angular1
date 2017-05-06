import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DescriptionComponent } from './description/description.component';
import { EmployeeComponent } from './employee/employee.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { KattapaComponent } from './kattapa/kattapa.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DescriptionComponent,
    EmployeeComponent,
    PropertyBindingComponent,
    KattapaComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
