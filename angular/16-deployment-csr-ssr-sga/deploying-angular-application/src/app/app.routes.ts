import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from '@angular/router';

import { NoTask } from './tasks/no-task/no-task';
import { resolveTitle, resolveUserName, UserTasks } from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean | RedirectCommand => {
  const shouldGetAccess = Math.random();
  const urlTree = inject(Router);

  if (shouldGetAccess < 0.5) {
    return true;
  }

  return new RedirectCommand(urlTree.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
    title: 'Home | No Task selected',
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    loadChildren: () => import('./users/user.routes').then((module) => module.routes),
    // canMatch: [dummyCanMatch],
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
