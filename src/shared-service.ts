import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isAddExpensesTabDisabled = new Subject<boolean>();
  applicationTitle = new BehaviorSubject<string>('Splitwise');
}
