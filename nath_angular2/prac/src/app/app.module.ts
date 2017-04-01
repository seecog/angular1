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
import { OutsideeraComponent } from './outsideera/outsideera.component';
import { TwowaydatabindComponent } from './twowaydatabind/twowaydatabind.component';
import { TwowaydatabindobjComponent } from './twowaydatabindobj/twowaydatabindobj.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { Directive1Directive } from './custom-directive/directive1.directive';
import { Directive2Directive } from './custom-directive/directive2.directive';
import { Directive3Directive } from './custom-directive/directive3.directive';

@NgModule({
  declarations: [
    AppComponent,
    SachinComponent,
    DravidComponent,
    GanguliComponent,
    MyFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    OutsideeraComponent,
    TwowaydatabindComponent,
    TwowaydatabindobjComponent,
    CustomDirectiveComponent,
    Directive1Directive,
    Directive2Directive,
    Directive3Directive
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
