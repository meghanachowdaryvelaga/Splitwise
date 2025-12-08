import { Component } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { UserList } from "../user-list/user-list";

@Component({
  selector: 'app-home-page',
  imports: [AddUser, UserList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
