import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SachinComponent } from './sachin/sachin.component';
import { DravidComponent } from './dravid/dravid.component';
import { MongiaComponent } from './mongia/mongia.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalComponent } from './animal/animal.component';
import {Calculator} from './services/calculator.service';
import {Triangle} from './services/trangle.service';
import {Perimeter} from './services/perimeter.service';
import { CheckserviceComponent } from './checkservice/checkservice.component';
import { MyproductlistComponent } from './myproductlist/myproductlist.component';
import {ProductService}  from './services/product.service';
import { HttpmoduleComponent } from './httpmodule/httpmodule.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SachinComponent,
    DravidComponent,
    MongiaComponent,
    ProductsComponent,
    ProductComponent,
    DoctorsComponent,
    DoctorComponent,
    PatientComponent,
    AnimalsComponent,
    AnimalComponent,
    CheckserviceComponent,
    MyproductlistComponent,
    HttpmoduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Calculator,Perimeter,Triangle,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
