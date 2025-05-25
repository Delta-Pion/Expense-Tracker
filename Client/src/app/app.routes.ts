import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';

export const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "alltransactions", component: AllTransactionsComponent }
];
