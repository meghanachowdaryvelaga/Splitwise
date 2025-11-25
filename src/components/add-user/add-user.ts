import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-user',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

}
