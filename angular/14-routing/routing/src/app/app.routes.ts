import { Routes } from '@angular/router';

import { Tasks } from './tasks/tasks';
import { NoTask } from './tasks/no-task/no-task';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
  },
  {
    path: 'tasks',
    component: Tasks,
  },
];
