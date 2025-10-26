import { Routes } from '@angular/router';

import { Tasks } from '../tasks/tasks';
import { NewTask } from '../tasks/new-task/new-task';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix',
  },
  {
    path: 'tasks',
    component: Tasks,
  },
  {
    path: 'tasks/new',
    component: NewTask,
  },
];
