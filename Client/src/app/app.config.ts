import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { emerald } from './emerald';
import { Noir } from './Noir';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './_interceptors/auth.interceptor';
import { MarkdownComponent, MarkdownModule, MarkdownService, provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideMarkdown(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      }
    })
  ]
};
