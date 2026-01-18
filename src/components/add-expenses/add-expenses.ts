import { Component, Input } from '@angular/core';
import { FeatureInfo } from '../../directives/feature-info';

@Component({
  selector: 'app-add-expenses',
  imports: [FeatureInfo],
  templateUrl: './add-expenses.html',
  styleUrl: './add-expenses.css',
})
export class AddExpenses {
  
  @Input() data: string = 'Add Expenses ';
}
