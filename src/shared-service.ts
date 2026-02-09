import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserDetails {
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
  getData(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>("http://localhost:3000/users")
  }
  postData(data: UserDetails) {
    return this.http.post("http://localhost:3000/users", data);
  }
}

