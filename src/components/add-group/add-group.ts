import { Component, EventEmitter, Output } from '@angular/core';
import { UserInterface } from '../../models/user.interface';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-group',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule,CommonModule, MatCheckboxModule],
  templateUrl: './add-group.html',
  styleUrl: './add-group.css',
})
export class AddGroup {
value='';
@Output() groupAdded= new EventEmitter<UserInterface>();
addGroup(){
  const name=this.value.trim();
  if(!name){
    alert("Please add group to proceed");
    return;
  }
  const group:UserInterface={
    name:name,
    youOwe:0,
    owesToYou:0
  };
  this.groupAdded.emit(group);
  this.value = '';
}
}
