import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
            <h1>My First Angular 2 App</h1>
              <courses></courses>
              <authors></authors>
              `

  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
