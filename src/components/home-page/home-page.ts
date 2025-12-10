import { Component } from '@angular/core';
import { UserList } from "../user-list/user-list";
import { AddUser } from "../add-user/add-user";

@Component({
  selector: 'app-home-page',
  imports: [UserList, AddUser],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  user: string[] = [];
  onUserAdded(username: string) {
    this.user.push(username);
  } 
}
