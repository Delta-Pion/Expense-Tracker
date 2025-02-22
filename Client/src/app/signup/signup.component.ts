import { Component,OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CardModule, FormsModule, ReactiveFormsModule, FloatLabelModule, PasswordModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signUpForm = new FormGroup({
    username: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null)
  });

  ngOnInit() {
        
  }

  onSubmit() {
    console.log(this.signUpForm?.value);
    this.signUpForm.get('username')?.setValue("");
    this.signUpForm.get('email')?.setValue("");
    this.signUpForm.get('password')?.setValue("");
  }
}

