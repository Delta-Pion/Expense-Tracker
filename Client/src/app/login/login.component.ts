import { Component,inject,OnInit, ViewEncapsulation } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Checkbox,InputTextModule,ButtonModule,CardModule,FormsModule,ReactiveFormsModule, RouterLink,PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  accountService = inject(AccountService);
  loginForm = new FormGroup({
    "email" : new FormControl<string>(""), // initialized to null
    "password" : new FormControl<string>("")
  });
  

  onSubmit() {
    console.log(this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe({
      next : value =>  alert("Logged In Successfully"), // console.log(`value : ${JSON.stringify(value)}`)
      error : error => console.log(`error : ${error.error}`),
      complete : () => console.log("done")
      
    })
    this.loginForm.get('email')?.setValue("");
    this.loginForm.get('password')?.setValue("");

  }
}


