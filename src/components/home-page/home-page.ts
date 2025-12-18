import { Component } from '@angular/core';
import { UserList } from "../user-list/user-list";
import { AddUser } from "../add-user/add-user";
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserList, AddUser],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {

  user: UserInterface[] = [];
  onUserAdded(username: UserInterface) {
    this.user.push(username);
  } 
}
