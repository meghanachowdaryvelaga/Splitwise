import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule,CommonModule],
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css'],
})
export class AddUser {
value='';
@Output() userAdded= new EventEmitter<UserInterface>();
addUser(){
  const name=this.value.trim();
  if(!name){
    alert("Please add user to proceed");
    return;
  }
  const user:UserInterface={
    name:name,
    youOwe:0,
    owesToYou:0
  };
  this.userAdded.emit(user);
  this.value = '';
}
}
