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
  pclass="pmesssage";
  pcolor="white";

  handleUserFormClickEvent(event) {
    this.message = "Form is submitted by " + event;
  }
}
