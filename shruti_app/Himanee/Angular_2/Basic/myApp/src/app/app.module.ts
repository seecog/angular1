import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { TriangleComponent } from './triangle/triangle.component';
import { MovieComponent } from './movie/movie.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { RegpageComponent } from './regpage/regpage.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublPipe } from './pipes/double.pipes';
import {VowelPipe} from './pipes/vowel.pipes';
import {ReversePipe} from './pipes/reev.pipes';
import {FilterPipe} from './pipes/search.pipes';
import { FruitsComponent } from './fruits/fruits.component';
import { Pipe2Component } from './pipe2/pipe2.component';
import {FindingMemo} from './pipe2/search.pipe';
import { RoutingComponent } from './routing/routing.component';
import {MyClass} from './directive/directive.color';
import {MyCondition} from './directive/mycondition.directive';

const appLink :Routes = [
{path : 'Items',component : Pipe2Component},
{path : 'product',component : PipesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StudentComponent,
    TriangleComponent,
    MovieComponent,
    PropertyBindingComponent,
    RegpageComponent,
    ServicecomponentComponent,
    PipesComponent,
    DoublPipe,
    ReversePipe,
    VowelPipe,
    FilterPipe,
    FruitsComponent,
    FindingMemo,
    Pipe2Component,
    RoutingComponent,
    MyClass,
    MyCondition
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appLink)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
