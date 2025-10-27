import { Component, inject, input } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, RouterLink } from '@angular/router';

import { type Task as TaskType } from './task/task.model';
import { TasksService } from './tasks.service';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userTasks = input.required<TaskType[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}

export const resolveUserTasks: ResolveFn<TaskType[]> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
