import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {FormioAuthConfig, FormioAuthService} from '@formio/angular/auth';
import {FORMIO_CONFIG, FormioAppConfig} from '@formio/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withComponentInputBinding()),
    FormioAuthService,
    FormioAppConfig,
    {
      provide: FORMIO_CONFIG,
      useValue: {
        apiUrl: 'http://localhost:3001',
        baseUrl: 'http://localhost:3001',
        appUrl: 'http://localhost:3001',
      }
    },
    {
      provide: FormioAuthConfig,
      useValue: {
        login: {
          form: 'admin/login'
        }
      }
    }
  ]
};
