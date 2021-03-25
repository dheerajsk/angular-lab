import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  @Input() parentData: string = "This is still child data";
  allowParentData: boolean = true;

  ngOnInit(): void {
  }

  handleFirstNameInput(event: any) {
    console.log(event.target.value);
  }

  handleLastNameInput(event: any) {
    console.log(event.target.value);
  }

}

