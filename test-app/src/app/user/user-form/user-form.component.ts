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

  ngOnInit(): void {
  }

  handleFirstNameInput(event: any) {
    console.log(event.target.value);
  }

  handleLastNameInput(event: any) {
    console.log(event.target.value);
  }

  handleFormSubmit(event) {
    console.log(event);
    this.clickEvent.emit(event);
  }

}

