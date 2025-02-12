import { Component } from '@angular/core';
import { Menubar, MenuBarStyle } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [Menubar,BadgeModule,AvatarModule,CommonModule,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home'
          },
          // {
          //     label: 'Features',
          //     icon: 'pi pi-star'
          // },
          {
              label: 'Transactions',
              icon: 'pi pi-credit-card',
              items: [
                  {
                      label: 'Income',
                      icon: 'pi pi-dollar'
                  },
                  {
                      label: 'Expenses',
                      icon: 'pi pi-wallet'
                  },
                  {
                    label: 'All',
                    icon : 'pi pi-list'
                  },
                  {
                      label: 'Bills',
                      icon: 'pi pi-receipt'
                  },
                  
                  // {
                  //     label: 'Templates',
                  //     icon: 'pi pi-palette',
                  //     items: [
                  //         {
                  //             label: 'Apollo',
                  //             icon: 'pi pi-palette'
                  //         },
                  //         {
                  //             label: 'Ultima',
                  //             icon: 'pi pi-palette'
                  //         }
                  //     ]
                  // }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope'
          }
      ]
  }
}
