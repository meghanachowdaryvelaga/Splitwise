import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AddUser } from "../add-user/add-user";
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../models/user.interface';
import { MatTableModule } from '@angular/material/table';
import { SharedService, PeriodicElement } from '../../shared-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList implements OnInit,OnDestroy {
  @Input() users: UserInterface[] = [];
  displayedColumns: string[] = ['srNo', 'name', 'youOwe', 'owesToYou'];
  dataSource: PeriodicElement[] = [];
  destroy$ = new Subject<void>();

  constructor(private sharedService: SharedService) {}
  
  ngOnInit(){
    console.log('subscribing to getData()');
    this.sharedService.getData().pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      console.log('received data', res);
      this.dataSource=res;
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('user-list: ngOnDestroy - emitting destroy$');
  }
  
  onUserAdded(username: UserInterface) {
    this.users.push(username);
  }
}
