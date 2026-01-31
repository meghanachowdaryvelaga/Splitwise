import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  srNo: number;
  youOwe: number;
  owesToYou: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {srNo: 1, name: 'Hydrogen', youOwe: 1.0079, owesToYou: 'H'},
  {srNo: 2, name: 'Helium', youOwe: 4.0026, owesToYou: 'He'},
  {srNo: 3, name: 'Lithium', youOwe: 6.941, owesToYou: 'Li'},
  {srNo: 4, name: 'Beryllium', youOwe: 9.0122, owesToYou: 'Be'},
  {srNo: 5, name: 'Boron', youOwe: 10.811, owesToYou: 'B'},
  {srNo: 6, name: 'Carbon', youOwe: 12.0107, owesToYou: 'C'},
  {srNo: 7, name: 'Nitrogen', youOwe: 14.0067, owesToYou: 'N'},
  {srNo: 8, name: 'Oxygen', youOwe: 15.9994, owesToYou: 'O'},
  {srNo: 9, name: 'Fluorine', youOwe: 18.9984, owesToYou: 'F'},
  {srNo: 10, name: 'Neon', youOwe: 20.1797, owesToYou: 'Ne'}
];

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isAddExpensesTabDisabled = new Subject<boolean>();
  applicationTitle = new BehaviorSubject<string>('Splitwise');
  getData(){
    return of(ELEMENT_DATA);
  }
}
