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
    PatientComponent
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
