import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
            <h1>Angular 2 - 4</h1>
            <input type="text" [(ngModel)]="stringTitle">
            {{ stringTitle | titleCase}}
            <favorite-comp></favorite-comp>

              <courses></courses>
              <pipes></pipes>
              <authors></authors>
              <i class="glyphicon glyphicon-star">dfdf</i>
              <favorite [is-favorite]="post.isFavorite" (change)="onChangeEmitter($event)"></favorite>
              <likes [totalLikes]="tweet.totalLikes" [isLike]="tweet.isLike"></likes>
              <hr/>
              <voter></voter>
              `

  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post= {
    title:"Title",
    isFavorite:true
  }

  tweet={
    totalLikes:20,
    isLike:false
  }

  onChangeEmitter($event){
    console.log($event);
  }
}
