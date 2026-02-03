import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  srNo: number;
  youOwe: number;
  owesToYou: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isAddExpensesTabDisabled = new Subject<boolean>();
  applicationTitle = new BehaviorSubject<string>('Splitwise');
  constructor( private http: HttpClient){ 
  }
  getData(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>("http://localhost:3000/getusers")
  }
}

