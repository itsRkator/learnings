import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(App, { providers: [TasksService] }).catch((err) => console.error(err)); // Platform Environment Injection: If service instance is used at a later point in the application, this will make application to bundle the service instance at the time of building and optimization adding an extra burden.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
