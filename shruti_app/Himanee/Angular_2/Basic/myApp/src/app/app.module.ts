import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { TriangleComponent } from './triangle/triangle.component';
import { MovieComponent } from './movie/movie.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { RegpageComponent } from './regpage/regpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent,
    TriangleComponent,
    MovieComponent,
    PropertyBindingComponent,
    RegpageComponent
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
