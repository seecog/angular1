import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {Movie} from './services/movies.service';
import {Routes,RouterModule} from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
const movieRoter : Routes = [
{
	path : '',
	component : MoviesComponent
},
{
	path : 'seemore/:search',
	component : SearchmoviesComponent
},
{
	path : 'movie/:id',
	component : MovieComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
	SearchmoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(movieRoter)
  ],
  providers: [Movie],
  bootstrap: [AppComponent]
})
export class AppModule { }
