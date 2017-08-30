import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  /*
  implements transform method from PipeTransform interface
  */
  transform(value: string): any {
    if(!value) return null;
    let string = value.split(' ');
    for(var i= 0; i<string.length; i++){
      let word = string[i];
      if(i> 0 && this.isPreposition(word)){
          string[i]=word.toLowerCase();
      }else{
          string[i] = this.toTitleCase(word);
      }

    }
    return string.join(' ');


  }
  /*
  Convert word to title case
  */
  private toTitleCase (word:string):string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

  /*
  Check if word is a preposition
  */
  private isPreposition(word:string):boolean {
    let prepositionArr=[
      'the',
      'of',
      'on',
      'at',
      'for',
      'but',
      'to'
    ];

    return prepositionArr.includes(word.toLowerCase());
  }

}
