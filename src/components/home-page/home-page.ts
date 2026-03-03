import { Component } from '@angular/core';
import { UserList } from "../user-list/user-list";
import { AddUser } from "../add-user/add-user";
import { UserInterface } from '../../models/user.interface';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AddExpenses } from "../add-expenses/add-expenses";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedService, UserDetails } from '../../shared-service';
import { AsyncPipe } from '@angular/common';
import { AddGroup } from '../add-group/add-group';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserList, AddUser, MatTabsModule, AddExpenses, AddGroup, MatCheckboxModule, FormsModule, AsyncPipe],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  disableAddExpensesTab:boolean=false;
  user: UserInterface[] = [];
  disableTab:boolean=false;
  srNo:number=0;
  isDataUpdated:boolean=false;
  constructor( public sharedService: SharedService){}
  ngOnInit(){
    // this.sharedService.isAddExpensesTabDisabled.subscribe((res)=>{ 
    //   this.disableTab=res;
    // })
    // this.sharedService.applicationTitle.next(this.sharedService.applicationTitle.value);
  }
  onUserAdded(username: UserInterface) {
    this.user.push(username);
    let userDetails : UserDetails={
      name : username.name,
      srNo : this.srNo+1,
      youOwe : username.youOwe,
      owesToYou : username.owesToYou.toString()
    }
   this.isDataUpdated=false;
    this.sharedService.postData(userDetails).subscribe(res=>{
    console.log("user details added successfully",res);
    this.isDataUpdated=true;
    })
  } 
  onClickCheckboxChange(event:any){
    this.sharedService.isAddExpensesTabDisabled.next(this.disableAddExpensesTab)
    
}
}
