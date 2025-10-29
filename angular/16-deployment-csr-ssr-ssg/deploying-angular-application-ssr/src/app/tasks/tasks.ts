import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';

import { Task } from './task/task';
import { type Task as TaskType } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  private readonly tasksService: TasksService = inject(TasksService);

  // Router params of the parent won't accessible by default via input by the child route
  // Need to be explicitly inherited via the withRouterConfig({ paramsInheritanceStrategy: 'always' }) in the provideRouter config
  // Directly accessible using the ActivatedRoute's paramMap Observables
  userId = input.required<string>();
  order = input<'ASC' | 'DESC' | undefined>(); // Using inputs

  // userTasks = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((task) => task.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'DESC') {
  //         return a.id > b.id ? -1 : 1;
  //       } else {
  //         return a.id > b.id ? 1 : -1;
  //       }
  //     })
  // );

  // Using Resolver
  userTasks = input.required<TaskType[]>();

  // Using the ActivatedRoute
  // order = signal<'ASC' | 'DESC'>('DESC');

  // private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    //   const subscription = this.activatedRoute.queryParamMap.subscribe({
    //     next: (queryParam) => {
    //       this.order.set(queryParam.get('order') as 'ASC' | 'DESC');
    //     },
    //   });
    //   this.destroyRef.onDestroy(() => {
    //     subscription.unsubscribe();
    //   });
  }
}

export const resolveUserTasks: ResolveFn<TaskType[]> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  activatedRouteState: RouterStateSnapshot
) => {
  const order = activatedRouteSnapshot.queryParamMap.get('order');

  const tasksService = inject(TasksService);

  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

  if (order && order === 'ASC') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks?.length ? tasks : [];
};
