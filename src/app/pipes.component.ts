import {Component} from '@angular/core';
@Component({
  selector:'pipes',
  template:`
  <h4>Title: {{ pipe.title |uppercase  }}</h4><br>
  <h5>students : {{ pipe.students |number }}</h5><br>
  <h5>Rating: {{ pipe.rating |number:'1.2-2'}}</h5><br>
  <h5>Prices: {{ pipe.prices | currency:'AUD':true:'3.2-2'}}</h5><br>
  <h5>Date: {{ pipe.releaseDate |date:'shortDate'}}</h5><br>
  <h5>Long Title: {{ pipe.longTitle |summary:70}}</h5><br>
  `
})


export class PipesComponent {
   pipe = {
    title:"Title Of Pipes",
    longTitle:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    rating:4.9745,
    students:30123,
    prices:190.95,
    releaseDate: new Date(2016,3,1)

  }
}
