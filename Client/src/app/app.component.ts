import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ButtonModule } from 'primeng/button';
import { SignupComponent } from "./signup/signup.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, NavComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title : string = 'Client';

  
}
