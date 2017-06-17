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
import { PropertyBinding2Component } from './property-binding-2/property-binding-2.component';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReativeApproachComponent } from './reative-approach/reative-approach.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Reactive2Component } from './reactive2/reactive2.component';
import { ServicesComponent } from './services/services.component';
import { AddComponent } from './services/add/add.component';
import { TriangleComponent } from './services/triangle/triangle.component';
import {PerimeterService} from './services/triangle/perimeter.service';
import { ProductsComponent } from './services/products/products.component';
import { FruitsComponent } from './services/fruits/fruits.component';
import { PipesComponent } from './pipes/pipes.component';
import {DoublePipe} from './pipes/double.pipe';
import {HraPipe} from './pipes/hra.pipe';
import {FilterPipe} from './pipes/search.pipe';
import {RouterModule,Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import { EmployeeinfoComponent } from './company/employeeinfo/employeeinfo.component';
import { PromisesComponent } from './promises/promises.component';
import {ObservableComponent} from './observable/observable.component';
import { UsersComponent } from './users/users.component';
import {MyD} from './company/my.directive';
import {MyColor} from './directive/color.directive';
const appLinks :Routes = [
{path : 'employee',component : EmployeeComponent},
{path : 'product/:id',component : ProductComponent },
{path : 'login',component : LoginComponent},
{path : 'employees',component : CompanyComponent},
{path : 'employeeinfo/:id',component : EmployeeinfoComponent},
{path : 'promises',component : PromisesComponent},
{path : 'observe',component : ObservableComponent},
{path : 'users',component : UsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DescriptionComponent,
    EmployeeComponent,
    PropertyBindingComponent,
    KattapaComponent,
    ProductComponent,
    PropertyBinding2Component,
    TemplateApproachComponent,
    ReativeApproachComponent,
    Reactive2Component,
    ServicesComponent,
    AddComponent,
    TriangleComponent,
    ProductsComponent,
    FruitsComponent,
    PipesComponent,
	DoublePipe,
	HraPipe,
	FilterPipe,
	CompanyComponent,
	EmployeeinfoComponent,
	PromisesComponent,
	ObservableComponent,
	UsersComponent,
	MyD,
	MyColor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appLinks)
  ],
  providers: [PerimeterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
