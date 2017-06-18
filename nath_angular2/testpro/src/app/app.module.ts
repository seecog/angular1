import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StructuraldComponent } from './structurald/structurald.component';
import {Myloop} from './directives/myloop.directive';
import {MyCondition} from './directives/mycondition.directive';
import {MyColor} from './directives/color.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StructuraldComponent,
	Myloop,
	MyCondition,
	MyColor
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
