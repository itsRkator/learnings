import { platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
