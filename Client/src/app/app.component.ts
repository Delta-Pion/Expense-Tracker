import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ButtonModule } from 'primeng/button';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title : string = 'Client';
  accountService = inject(AccountService);

  ngOnInit() {
    this.accountService.getUser().subscribe({
      next : value => console.log(value)
    })
  }
}
