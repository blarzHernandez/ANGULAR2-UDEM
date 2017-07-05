import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector : '[autoGrow]',
  host:{
    '(focus)':'onFocus()',
    '(blur)':'onBlur'
  }
})

export class AutoGrowDirective {
  
  constructor(private el:ElementRef, private renderer:Renderer){
  }

//Onfocus event
  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','200');
  }

//onBlur event
  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement,'width','120');
  }



}
