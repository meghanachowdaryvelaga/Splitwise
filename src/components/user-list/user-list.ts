import { Component, Input, OnInit } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../models/user.interface';
import { MatTableModule } from '@angular/material/table';
import { SharedService, PeriodicElement } from '../../shared-service';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList implements OnInit {
  @Input() users: UserInterface[] = [];
  displayedColumns: string[] = ['srNo', 'name', 'youOwe', 'owesToYou'];
  dataSource: PeriodicElement[] = [];

  constructor(private sharedService: SharedService) {}
  ngOnInit(){
    this.sharedService.getData().subscribe((res)=>{
      this.dataSource=res;
    })
  }
  
  onUserAdded(username: UserInterface) {
    this.users.push(username);
  }
}
