import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MarksComponent } from './marks/marks.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MarksComponent,
    FormValidationComponent,
    ReactiveValidationComponent,
    RegisterComponent
	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
