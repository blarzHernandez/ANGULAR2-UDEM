import {Component,Input,Output} from "@angular/core";

@Component({
  selector : 'likes',
  templateUrl:"./like.template.html",
  styles:[`
    .glyphicon-heart{
      color:#ccc;
      cursor:pointer;
    }
    .highlighted{
      color:deeppink;
    }
    `]
})


export class LikeComponent{
  @Input() totalLikes = 0;
  @Input() isLike = false;

  onClick(){
    this.isLike=!this.isLike;
    this.totalLikes += this.isLike ? 1 : -1;
  }

}
