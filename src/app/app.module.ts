import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

//Services
import {CourseService} from './course.service';//Courses service
import {AuthorService} from './author.service';//Authors service

//Directives
import {AutoGrowDirective} from './auto-grow.directive'; //auto-grow directive



@NgModule({
  //Add components, pipes, directives
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    FavoriteComponent,
    LikeComponent,
    VoterComponent,
    AutoGrowDirective
  ],
  imports: [
    //Angular common
    BrowserModule
  ],
  //Add provider such as services
  providers: [CourseService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
