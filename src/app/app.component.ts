import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
            <h1>My First Angular 2 App</h1>
              <courses></courses>
              <authors></authors>
              <i class="glyphicon glyphicon-star">dfdf</i>
              <favorite [is-favorite]="post.isFavorite" (change)="onChangeEmitter($event)"></favorite>
              `

  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post= {
    title:"Title",
    isFavorite:true
  }

  onChangeEmitter($event){
    console.log($event);
  }
}
