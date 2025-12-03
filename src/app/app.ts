import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddUser } from "../components/add-user/add-user";
import { UserList } from '../components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddUser, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Splitwise');
}
