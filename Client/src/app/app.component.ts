import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ButtonModule } from 'primeng/button';
import { AccountService } from './_services/account.service';
import { MyPluginComponent } from './test-component/my-plugin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, NavComponent , MyPluginComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title : string = 'Client';
  accountService = inject(AccountService);

  ngOnInit() {
    this.setAccessObject()
    console.log(`user before fetching : ${this.accountService.user()}`)

    if(this.accountService.accessObject()) {
      this.accountService.getUser().subscribe({
        next : value => console.log(value)
      })
    }
    
  }

  setAccessObject() {
    const accessObjectString = localStorage.getItem("AccessObject");
    if(accessObjectString) {
      this.accountService.accessObject.set(JSON.parse(accessObjectString))
    }
  }

}
