import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, FormsModule,MatInputModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
value='';
@Output() userAdded= new EventEmitter<string>();
addUser(){
  const name=this.value.trim();
  if(!name){
    alert("Please add user to proceed");
    return;
  }
  this.userAdded.emit(name);
  this.value = '';
}
}
