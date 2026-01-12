import { Component } from '@angular/core';
import { UserList } from "../user-list/user-list";
import { AddUser } from "../add-user/add-user";
import { UserInterface } from '../../models/user.interface';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserList, AddUser, MatTabsModule, FormsModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {

  user: UserInterface[] = [];
  searchtext: string = '';
  onUserAdded(username: UserInterface) {
    this.user.push(username);
  } 
}
