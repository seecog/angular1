import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { MohanComponent } from './employees/mohan/mohan.component';
import { SohanComponent } from './employees/sohan/sohan.component';
import { ProductsComponent } from './products/products.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SubtractComponent } from './subtract/subtract.component';
import { OnlineshopComponent } from './onlineshop/onlineshop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeesComponent,
    MohanComponent,
    SohanComponent,
    ProductsComponent,
    CalculatorComponent,
    SubtractComponent,
    OnlineshopComponent
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
