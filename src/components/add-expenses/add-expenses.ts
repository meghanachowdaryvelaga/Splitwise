import { Component, inject, Input } from '@angular/core';
import { FeatureInfo } from '../../directives/feature-info';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddExpensesDialog } from './add-expenses-dialog/add-expenses-dialog';

@Component({
  selector: 'app-add-expenses',
  standalone: true,
  imports: [FeatureInfo, MatButtonModule, MatDialogModule],
  templateUrl: './add-expenses.html',
  styleUrls: ['./add-expenses.css'],
})
export class AddExpenses {
  readonly dialog = inject(MatDialog);
  @Input() data: string = 'Add Expenses ';
  openDialog() {
    this.dialog.open(AddExpensesDialog, {
      width: '400px'
    });
  }
}
