import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import {Routes,RouterModule} from '@angular/router';
import { ThirdComponent } from './third/third.component';

const myPaths : Routes = [
{path : '',component : PostsComponent},
{path : 'posts/:id',component : PostComponent},
{path : 'third',component : ThirdComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(myPaths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
