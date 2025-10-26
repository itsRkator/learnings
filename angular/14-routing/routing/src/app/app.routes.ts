import { Routes } from '@angular/router';

import { NoTask } from './tasks/no-task/no-task';
import { UserTasks } from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';
import { routes as userRoutes } from './users/user.routes';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    children: userRoutes,
  },
  {
    path: '**',
    component: NotFound,
  },
];
