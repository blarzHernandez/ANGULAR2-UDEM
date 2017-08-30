//sdsadas
import { Component } from '@angular/core';

@Component({
  selector:"favorite-comp",
  templateUrl:"./favorites.template.html",
  styles:[
    `
    .glyphicon-star{
      color:orange;
      pointer:mouse;
    }

    `
  ]
})
export class FavoritesComponent {
  favorite = false;
  isFavorite(){
    this.favorite = !this.favorite;
  }

  ngOnInit(){

  }
}
