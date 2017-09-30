import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
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
import { FormserviceComponent } from './formservice/formservice.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AppleComponent } from './fruits/apple/apple.component';
import { BananaComponent } from './fruits/banana/banana.component';
import { CitiesComponent } from './cities/cities.component';
import { CityinfoComponent } from './cityinfo/cityinfo.component';
import {CityService} from './services/cities.service';
import { CityComponent } from './cities/city/city.component';
import { Output1Component } from './output1/output1.component';
import { ChildComponent } from './output1/child/child.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import {MobileService} from './services/mobile.service';
import { MobileComponent } from './mobiles/mobile/mobile.component';
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
	RegisterformComponent,
	FormserviceComponent,
	ReactivefrmComponent,
	FruitsComponent,
	AppleComponent,
	BananaComponent,
	CitiesComponent,
	CityinfoComponent,
	CityComponent,
	Output1Component,
	ChildComponent,
	MobilesComponent,
	MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule
  ],
  providers: [MobileService,CalculatorService,TriangleService,SalaryService,PerimeterService,Da,Ta,Hra,Mysal,CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
