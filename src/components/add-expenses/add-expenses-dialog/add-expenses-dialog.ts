import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-expenses-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './add-expenses-dialog.html',
  styleUrl: './add-expenses-dialog.css',
})
export class AddExpensesDialog {
 readonly dialogRef = inject(MatDialogRef<AddExpensesDialog>);
 close(){
    this.dialogRef.close();
    
 }
}
