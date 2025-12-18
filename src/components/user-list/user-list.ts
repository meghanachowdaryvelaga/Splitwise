import { Component, Input } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  @Input() users: UserInterface[] = [];

  onUserAdded(username: UserInterface) {
    this.users.push(username);
  }
}
