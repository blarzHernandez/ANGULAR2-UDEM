import {Component,Input, Output,EventEmitter} from '@angular/core';
@Component({
  selector:"favorite",
  templateUrl:'./favorite.template.html',
  styles:[
    `
    .glyphicon-star{
      color:red;
    }
    `
  ]
})
export class FavoriteComponent{
  //input properties
  @Input('is-favorite')isFavorite = false;

 //output properties
 @Output() change = new EventEmitter();
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }

}
