import { Routes } from '@angular/router';

import { canLeaveEditPage, NewTask } from '../tasks/new-task/new-task';
import { resolveUserTasks, Tasks } from '../tasks/tasks';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix',
      },
      {
        path: 'tasks',
        component: Tasks,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTask,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
