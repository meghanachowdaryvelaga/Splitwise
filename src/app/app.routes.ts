import { Routes } from '@angular/router';
import { AddUser } from '../components/add-user/add-user';
import { HomePage } from '../components/home-page/home-page';
import { U } from '@angular/cdk/keycodes';
import { UserList } from '../components/user-list/user-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '**',
    redirectTo: 'homepage'
  }
];
