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
import { CompanyComponent } from './company/company.component';
import {MyDa} from './services/myda.service';
import {MyHra} from './services/myhra.service';
import {MyTa} from './services/myta.service';
import {MySal} from './services/mysal.service';
import {Employee} from './services/employee.service';
import { FruitshopComponent } from './fruitshop/fruitshop.component';
import {FruitService} from './services/fruits.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProdutsComponent,
    AddproductComponent,
    CalculationComponent,
    SsalaryComponent,
    CompanyComponent,
    FruitshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PerimeterService,Da,Hra,MyDa,MyTa,MyHra,MySal,Employee,FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
