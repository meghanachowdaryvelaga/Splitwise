import { Component } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AddUser, CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  users: string[] = [];

  onUserAdded(userName: string) {
    this.users.push(userName);
  }
}
