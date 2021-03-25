import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  @Input() parentData: string = "This is still child data";
  @Output() clickEvent = new EventEmitter();
  allowParentData: boolean = true;
  firstName: string;
  lastName: string;

  ngOnInit(): void {
  }

  handleFirstNameInput(event: any) {
    console.log(event.target.value);
    this.firstName = event.target.value;
  }

  handleLastNameInput(event: any) {
    this.lastName = event.target.value;
    console.log(event.target.value);
  }

  handleFormSubmit(event) {
    console.log(event);
    this.clickEvent.emit(this.firstName + " " + this.lastName);
  }

}

