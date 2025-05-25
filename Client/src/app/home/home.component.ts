import { Component } from '@angular/core';
import { MyPluginComponent } from '../test-component/my-plugin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyPluginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
