import { Component, inject, OnInit, signal } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormControl, FormGroup, FormsModule, FormSubmittedEvent, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChatService } from '../_services/chat.service';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'app-all-transactions',
  standalone: true,
  imports: [TableModule, CommonModule, IconFieldModule, InputTextModule, InputIconModule, TagModule, ScrollPanelModule, FormsModule, InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule, MarkdownModule, MarkdownComponent],
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.css'
})
export class AllTransactionsComponent implements OnInit {

  expensesService = inject(ExpenseService);
  chatService = inject(ChatService);
  Expenses = this.expensesService.Expenses();


  response = signal<string>("Placeholder Model Response");
  ChatForm = new FormGroup({
    "inputPrompt": new FormControl<string>("Enter Prompt"),
  });

  ngOnInit(): void {
    if (this.expensesService.Expenses().length === 0) this.loadExpenses();

    console.log(this.expensesService.Expenses());
  }

  loadExpenses() {
    this.expensesService.getExpenses()
  }

  submitPrompt() {
    console.log(this.ChatForm.value);
    this.chatService.getResponse(this.ChatForm.value).subscribe(
      {
        next: resp => {
          this.response.set(resp.responseString)
          console.log(resp);
        }
      }
    )
      ;
    this.ChatForm.get('inputPrompt')?.setValue("Enter Prompt");
  }

}
