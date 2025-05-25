import { Component, inject, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormControl, FormGroup, FormsModule, FormSubmittedEvent, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-all-transactions',
  standalone: true,
  imports: [TableModule, CommonModule, IconFieldModule, InputTextModule, InputIconModule, TagModule, ScrollPanelModule, FormsModule, InputTextModule, FloatLabelModule, ButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.css'
})
export class AllTransactionsComponent implements OnInit {
  expensesService = inject(ExpenseService);
  Expenses = this.expensesService.Expenses();


  response = "Placeholder Model Response";
  ChatForm = new FormGroup({
    "inputprompt": new FormControl<string>("Enter Prompt"),
  });

  ngOnInit(): void {
    if (this.expensesService.Expenses().length === 0) this.loadExpenses();

    console.log(this.expensesService.Expenses());
  }

  loadExpenses() {
    this.expensesService.getExpenses()
  }

  submitPrompt() {
    console.log(this.ChatForm.get('inputprompt')?.value)
    this.ChatForm.get('inputprompt')?.setValue("Enter Prompt");
  }

}
