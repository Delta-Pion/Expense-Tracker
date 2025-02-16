import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Checkbox,InputTextModule,ButtonModule,CardModule,FormsModule,ReactiveFormsModule, RouterLink,PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null)
  });

  ngOnInit() {
        
  }

  onSubmit() {
    console.log(this.loginForm?.value);
    this.loginForm.get('email')?.setValue("");
    this.loginForm.get('password')?.setValue("");
  }
}


