import { Component } from '@angular/core';

//component decorator with 3 properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // the AppComponent class contains two properties with an assigned value: title, message
  // the value in the html is replaced with the value of this title property
  title = 'Angular Basics';
  message =
    'Angular is a JavaScript framework for building client-side applications';
}
