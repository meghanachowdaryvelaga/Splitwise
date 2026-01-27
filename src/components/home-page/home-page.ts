import { Component } from '@angular/core';
import { UserList } from "../user-list/user-list";
import { AddUser } from "../add-user/add-user";
import { UserInterface } from '../../models/user.interface';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AddExpenses } from "../add-expenses/add-expenses";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedService } from '../../shared-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserList, AddUser, MatTabsModule, AddExpenses,  MatCheckboxModule, FormsModule, AsyncPipe],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  disableAddExpensesTab:boolean=false;
  user: UserInterface[] = [];
  disableTab:boolean=false;
  constructor( public sharedService: SharedService){}
  ngOnInit(){
    // this.sharedService.isAddExpensesTabDisabled.subscribe((res)=>{ 
    //   this.disableTab=res;
    // })
    // this.sharedService.applicationTitle.next(this.sharedService.applicationTitle.value);
  }
  onUserAdded(username: UserInterface) {
    this.user.push(username);
  } 
  onClickCheckboxChange(event:any){
    this.sharedService.isAddExpensesTabDisabled.next(this.disableAddExpensesTab)
    
}
}
