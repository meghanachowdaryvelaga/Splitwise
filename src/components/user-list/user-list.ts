import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInterface } from '../../models/user.interface';
import { SharedService, UserDetails } from '../../shared-service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList implements OnInit,OnDestroy, OnChanges{
  @Input() users: UserInterface[] = [];
  @Input() isDataUpdated:boolean=false;
  displayedColumns: string[] = ['srNo', 'name', 'youOwe', 'owesToYou'];
  dataSource= signal<UserDetails[]>([]);
  destroy$ = new Subject<void>();

  constructor(private sharedService: SharedService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isDataUpdated'].currentValue){
      this.getData();
  }
}
  ngOnInit(){
this.getData();
  }
  getData(){
    this.sharedService.getData().pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      this.dataSource.set(res);
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  
  onUserAdded(username: UserInterface) {
    this.users.push(username);
  }
}
