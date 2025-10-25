import { Routes } from '@angular/router';

import { Tasks } from './tasks/tasks';
import { NoTask } from './tasks/no-task/no-task';
import { UserTasks } from './users/user-tasks/user-tasks';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
  },
  {
    path: 'users/:userId',
    component: UserTasks,
  },
];
