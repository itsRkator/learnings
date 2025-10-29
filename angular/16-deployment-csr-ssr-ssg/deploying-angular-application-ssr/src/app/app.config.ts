import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(), // Required when the dynamic params are extracted using inputs
      withRouterConfig({ paramsInheritanceStrategy: 'always' }) // router params of the parent won't accessible by default via input by the child route, need to be explicitly inherited via the withRouterConfig({ paramsInheritanceStrategy: 'always' }) in the provideRouter config
    ), provideClientHydration(withEventReplay()),
  ],
};
