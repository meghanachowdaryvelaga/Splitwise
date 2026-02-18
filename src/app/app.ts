import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AddUser } from "../components/add-user/add-user";
import { UserList } from '../components/user-list/user-list';
import { HomePage } from "../components/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  ngOnInit(): void {
    
  }
    protected readonly title = signal('Splitwise');
}
