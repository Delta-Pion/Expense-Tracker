import { Component, inject, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-all-transactions',
  standalone: true,
  imports: [TableModule, CommonModule, IconFieldModule, InputTextModule, InputIconModule, TagModule],
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.css'
})
export class AllTransactionsComponent implements OnInit {
  expensesService = inject(ExpenseService);
  Expenses = this.expensesService.Expenses();

  ngOnInit(): void {
    if (this.expensesService.Expenses().length === 0) this.loadExpenses();

    console.log(this.expensesService.Expenses());
  }

  loadExpenses() {
    this.expensesService.getExpenses()
  }

}
