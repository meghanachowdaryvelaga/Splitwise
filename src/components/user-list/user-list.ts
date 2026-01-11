import { Component, Input } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../models/user.interface';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  srNo: number;
  youOwe: number;
  owesToYou: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srNo: 1, name: 'Hydrogen', youOwe: 1.0079, owesToYou: 'H'},
  {srNo: 2, name: 'Helium', youOwe: 4.0026, owesToYou: 'He'},
  {srNo: 3, name: 'Lithium', youOwe: 6.941, owesToYou: 'Li'},
  {srNo: 4, name: 'Beryllium', youOwe: 9.0122, owesToYou: 'Be'},
  {srNo: 5, name: 'Boron', youOwe: 10.811, owesToYou: 'B'},
  {srNo: 6, name: 'Carbon', youOwe: 12.0107, owesToYou: 'C'},
  {srNo: 7, name: 'Nitrogen', youOwe: 14.0067, owesToYou: 'N'},
  {srNo: 8, name: 'Oxygen', youOwe: 15.9994, owesToYou: 'O'},
  {srNo: 9, name: 'Fluorine', youOwe: 18.9984, owesToYou: 'F'},
  {srNo: 10, name: 'Neon', youOwe: 20.1797, owesToYou: 'Ne'}
];

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  @Input() users: UserInterface[] = [];
  displayedColumns: string[] = ['srNo', 'name', 'youOwe', 'owesToYou'];
  dataSource = ELEMENT_DATA;

  onUserAdded(username: UserInterface) {
    this.users.push(username);
  }
}
