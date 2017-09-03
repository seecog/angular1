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
import {CalculatorService} from './services/calculator.service';
import { CalctestComponent } from './calctest/calctest.component';
import {TriangleService} from './services/triangle.service';
import {SalaryService} from './services/salary.service';
import {PerimeterService} from './services/perimeter.service';
import {Ta} from './services/ta.service';
import {Da} from './services/da.service';
import {Hra} from './services/hra.service';
import {Mysal} from './services/mysal.service';
import {Double} from './pipes/double.pipe';
import {AreaPipe} from './pipes/area.pipe';
import {PowerPipe} from './pipes/power.pipe';
import {SearchMe} from './pipes/search.pipe';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';
import {LimitPipe} from './pipes/limit.pipe';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { RegisterformComponent } from './registerform/registerform.component';
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
    OnlineshopComponent,
	CalctestComponent,
	Double,
	AreaPipe,
	PowerPipe,
	SearchMe,
	SearchproductsComponent,
	LimitPipe,
	FormvalidationComponent,
	RegisterformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalculatorService,TriangleService,SalaryService,PerimeterService,Da,Ta,Hra,Mysal],
  bootstrap: [AppComponent]
})
export class AppModule { }
