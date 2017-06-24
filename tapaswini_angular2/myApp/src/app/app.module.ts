import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdutsComponent } from './produts/produts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CalculationComponent } from './calculation/calculation.component';
import {PerimeterService} from './services/perimeter.service';
import { SsalaryComponent } from './ssalary/ssalary.component';
import {Da} from './services/da.service';
import {Hra} from './services/hra.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProdutsComponent,
    AddproductComponent,
    CalculationComponent,
    SsalaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PerimeterService,Da,Hra],
  bootstrap: [AppComponent]
})
export class AppModule { }
