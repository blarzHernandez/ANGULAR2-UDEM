import {Component} from '@angular/core';
@Component({
  selector:"favorite",
  template:`
  <h3>My favorite component</h3>
    <i
      class="glyphicon"
      [class.glyphicon-star.empty]="!isFavorite"
      [class.glyphicon-star]="isFavorite"
      (click)="onClick()"
      >
    </i>

  `
})
export class FavoriteComponent{
  isFavorite:boolean = false;

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
