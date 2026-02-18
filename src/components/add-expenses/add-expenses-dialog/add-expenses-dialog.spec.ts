import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensesDialog } from './add-expenses-dialog';

describe('AddExpensesDialog', () => {
  let component: AddExpensesDialog;
  let fixture: ComponentFixture<AddExpensesDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpensesDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpensesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
