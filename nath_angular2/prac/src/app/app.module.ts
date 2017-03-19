import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SachinComponent } from './sachin/sachin.component';
import { DravidComponent } from './dravid/dravid.component';
import { GanguliComponent } from './ganguli/ganguli.component';
import { MyFormComponent } from './my-form/my-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SachinComponent,
    DravidComponent,
    GanguliComponent,
    MyFormComponent,
    LoginFormComponent,
    RegisterFormComponent
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
