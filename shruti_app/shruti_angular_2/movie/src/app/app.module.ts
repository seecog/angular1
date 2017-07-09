import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {Movie} from './services/movies.service';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Movie],
  bootstrap: [AppComponent]
})
export class AppModule { }
