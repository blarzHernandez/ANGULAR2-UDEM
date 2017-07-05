import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {CourseService} from './course.service'//Courses service
import {AuthorService} from './author.service'//Authors service

@NgModule({
  //Add components
  declarations: [
    AppComponent, CoursesComponent,AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  //Add provider such as services
  providers: [CourseService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
