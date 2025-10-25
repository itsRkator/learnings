import { Routes } from '@angular/router';

import { Tasks } from './tasks/tasks';
import { NoTask } from './tasks/no-task/no-task';
import { UserTasks } from './users/user-tasks/user-tasks';
import { NewTask } from './tasks/new-task/new-task';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    children: [
      {
        path: 'tasks',
        component: Tasks,
      },
      {
        path: 'task/new',
        component: NewTask,
      },
    ],
  },
];
