import { Component, inject } from '@angular/core';
import { Menubar, MenuBarStyle } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule, NgIf } from '@angular/common';
import { Menu } from 'primeng/menu';
import { AccountService } from '../_services/account.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [Menubar, BadgeModule, AvatarModule, CommonModule, NgIf, Menu, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);

  items: MenuItem[] | undefined;

  profileItems: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: "home"
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
            icon: 'pi pi-list'
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

    this.profileItems = [
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.accountService.logout();
            }
          }
        ]
      }
    ];
  }
}
