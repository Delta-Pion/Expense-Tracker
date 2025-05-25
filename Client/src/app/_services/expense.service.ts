import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ExpenseObject } from '../_models/expense-object';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  baseUrl = "http://localhost:5000/";
  http = inject(HttpClient);

  Expenses = signal<ExpenseObject[]>([]);

  getExpenses() {
    return this.http.get<ExpenseObject[]>(this.baseUrl + "api/" + "Expenses/" + "current").subscribe({
      next: expenses => this.Expenses.set(expenses),
    }
    )

  }
}
