import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  data = "This is from Parent variable";
  message = "Waiting for user to submit form";
  pclass = "pmesssage";
  pcolor = "white";
  subtitle = "Welcome to my page. Please use menus to navigate";

  dateVal: Date = new Date();

  handleUserFormClickEvent(event) {
    this.message = "Form is submitted by " + event;
  }
}
