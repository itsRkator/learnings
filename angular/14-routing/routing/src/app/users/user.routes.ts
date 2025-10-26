import { Routes } from '@angular/router';

import { resolveUserTasks, Tasks } from '../tasks/tasks';
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
    resolve: {
      userTasks: resolveUserTasks
    }
  },
  {
    path: 'tasks/new',
    component: NewTask,
  },
];
