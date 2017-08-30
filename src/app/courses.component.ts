import {Component} from '@angular/core';
import {CourseService} from './course.service';

//Decorator
@Component({
  selector:'courses',
  template:`
  <h2>Courses</h2>


  <input type="text" autoGrow [(ngModel)] = "title">


  Preview: {{title}}
  <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
  <div (click) = "onDivClick($event)">
  <button (click)="onClick($event)" class ="btn btn-default"
  [style.backGroundColor]="isActive ? 'blue' : 'black'"
  >Style Binding</button>
  </div>
  <img src="{{imageUrl}}"/>
  <ul>
  <li *ngFor=' let course of courses'>{{course}}</li>
  </ul>
  `

})

export class CoursesComponent{

  title = "The title of courses page";
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  isActive:boolean = true;

  constructor(courseService:CourseService){
    this.courses = courseService.getCourses();

  }

  onClick($event){
    $event.stopPropagation();
    console.log("Clicked",$event);
  }

  onDivClick($event){
    console.log("Clicked div",$event);
  }

}
