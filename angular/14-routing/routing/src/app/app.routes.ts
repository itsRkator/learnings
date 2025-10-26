import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/user.routes';
import { NoTask } from './tasks/no-task/no-task';
import { resolveTitle, resolveUserName, UserTasks } from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
    title: 'Home | No Task selected',
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    children: userRoutes,
    data: {
      message: 'Test Data',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    // Catching any unwanted route which is not defined as a fallback
    path: '**',
    component: NotFound,
  },
];
