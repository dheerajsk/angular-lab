import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModel[] = [];
  constructor() { }

  ngOnInit(): void {
    let user = new UserModel();
    user.id = 1;
    user.username = "User1";
    this.users.push(user);
    let user2 = new UserModel();
    user2.id = 2;
    user2.username = "User2";
    this.users.push(user2);
    let user3 = new UserModel();
    user3.id = 3;
    user3.username = "User3";
    this.users.push(user3);
  }

}

class UserModel {
  username: string;
  id: number;
}
